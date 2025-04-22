/*
Les registres sont des objets qui vont être remplies par le code Javascript afin de suivre l’état de la page.
Par exemple, suivre quelles illustrations sont actuellement affichées pour savoir s’il faut la remplacer par une
nouvelle illustration ou conserver l’existante.
Cela permet également de sauvegarder une référence vers les éléments dynamiques des bibliothèques Javascript
(graphiques et cartes interactives), qui nécessitent d’être détruits par des fonctions spécifiques pour vider la mémoire
du navigateur des éléments qui sont chargés.
Par exemple, un graphique nécessite d’être nettoyée avec la méthode .destroy() pour que ChartJS "oublie" complètement
l’élément.
 */
// Registre des figures, pour vérifier ce qui est déjà affiché
let figureRegistry = {};
// Registre des graphiques ChartJS pour suppression
let chartRegistry = {};
// Registre des cartes interactives Leaflet pour interaction / suppression
let mapRegistry = {};

let colors = {
    primary1: getComputedStyle(document.body).getPropertyValue('--color-primary-1'),
    primary1light: getComputedStyle(document.body).getPropertyValue('--color-primary-1-light'),
    primary1lighter: getComputedStyle(document.body).getPropertyValue('--color-primary-1-lighter'),
    primary2: getComputedStyle(document.body).getPropertyValue('--color-primary-2'),
    primary2light: getComputedStyle(document.body).getPropertyValue('--color-primary-2-light'),
    primary2lighter: getComputedStyle(document.body).getPropertyValue('--color-primary-2-lighter'),
    primary3: getComputedStyle(document.body).getPropertyValue('--color-primary-3'),
    primary3light: getComputedStyle(document.body).getPropertyValue('--color-primary-3-light'),
    primary3lighter: getComputedStyle(document.body).getPropertyValue('--color-primary-3-lighter'),
    secondary1: getComputedStyle(document.body).getPropertyValue('--color-secondary-1'),
    secondary1light: getComputedStyle(document.body).getPropertyValue('--color-secondary-1-light'),
    secondary1lighter: getComputedStyle(document.body).getPropertyValue('--color-secondary-1-lighter'),
    secondary2: getComputedStyle(document.body).getPropertyValue('--color-secondary-2'),
    secondary2light: getComputedStyle(document.body).getPropertyValue('--color-secondary-2-light'),
    secondary2lighter: getComputedStyle(document.body).getPropertyValue('--color-secondary-2-lighter'),
    secondary3: getComputedStyle(document.body).getPropertyValue('--color-secondary-3'),
    secondary3light: getComputedStyle(document.body).getPropertyValue('--color-secondary-3-light'),
    secondary3lighter: getComputedStyle(document.body).getPropertyValue('--color-secondary-3-lighter'),
    black: getComputedStyle(document.body).getPropertyValue('--color-black'),
    blacklight: getComputedStyle(document.body).getPropertyValue('--color-black-light'),
    blacklighter: getComputedStyle(document.body).getPropertyValue('--color-black-lighter'),
    white3: getComputedStyle(document.body).getPropertyValue('--color-white-3'),
}


document.addEventListener('scroll-scene-enter', (event) => {
    /*
    Réaction à l’arrivée d’un nouvel évènement de scroll
     */
    // Récupération des informations d’animation de scroll à appliquer
    let scrollData = {};
    for (let attribute of event.detail.element.attributes) {
        if (attribute.name.startsWith('scroll'))
            scrollData[attribute.name] = attribute.value;
    }
    if (scrollData['scroll-title'])
        scrollTitle(scrollData['scroll-title']);
    else {
        // Ajout de la classe CSS de l’élément actif (par exemple pour gérer l’opacité)
        event.detail.element.classList.add('is-active');
        scrollEvent(scrollData);
    }
});
document.addEventListener('scroll-scene-exit', (event) => {
    // Lorsqu’on quitte un élément de scroll, on lui retire la classe CSS d’élément actif
    event.detail.element.classList.remove('is-active');
});

function scrollTitle(title) {
    /*
    Gère l’apparition/disparition du header
    Rend actif le bon titre dans le header
     */
    let header = document.getElementById('header');
    if (title === 'none')
        // scroll-title="none" permet de masquer le header
        header.classList.remove('is-active');
    else {
        header.classList.add('is-active');
        // On récupère le numéro du titre
        let titleNumber = Number(title);
        let navbar = document.getElementById('navbar');
        // On enlève la classe is-active des enfants de la navbar
        for (let child of navbar.children) {
            child.classList.remove('is-active');
        }
        // On ajoute la class is-active à l’élément de titre concerné
        navbar.children[titleNumber - 1].classList.add('is-active');
    }
}

function scrollEvent(scrollData) {
    /*
    Lance les hooks, s’il y en a, et entre les deux charge l’évènement principal
     */
    if (scrollData['scroll-pre-hook']) runHook(scrollData['scroll-pre-hook']);
    if (scrollData['scroll-type']) scrollFigure(scrollData);
    if (scrollData['scroll-post-hook']) runHook(scrollData['scroll-post-hook']);
}

function runHook(hookName) {
    /*
    Va chercher une fonction hook par son nom et l’exécute.
     */
    hooks[hookName]();
}

function scrollFigure(scrollData) {
    /*
    Vérifie, à partir des informations d’un évènement de scroll, s’il faut faire un changement d’illustration.
    Si c’est le cas, il appelle la fonction correspondant au type d’évènement de scroll (image, graphique, carte)
    Si ce n’est pas le cas, il peut quand même appeler une fonction particulière sur une illustration existante (pour
    l’instant, cela ne concerne que les cartes pour modifier la vue / le zoom).
     */
    const figureRegistryString = buildFigureRegistryString(scrollData);
    if (!checkFigureRegistryString(scrollData['scroll-figure'], figureRegistryString)) {
        cleanFigureIfNeeded(scrollData['scroll-figure'], figureRegistryString);
        switch (scrollData['scroll-type']) {
            case 'img':
                scrollImg(scrollData);
                break;
            case 'chart':
                scrollChart(scrollData);
                break;
            case 'map':
                scrollMap(scrollData);
                break;
            case 'html':
                scrollHtml(scrollData);
                break;
        }
        registerFigureRegistryString(scrollData['scroll-figure'], figureRegistryString);
    } else {
        switch (scrollData['scroll-type']) {
            case 'map':
                scrollExistingMap(scrollData);
                break;
        }
    }
}


function buildFigureRegistryString(scrollData) {
    /*
    Construit la chaîne de caractères qui sera enregistrée dans le registre des figures
     */
    switch (scrollData['scroll-type']) {
        case 'img':
            return 'img-' + scrollData['scroll-img-link'];
        case 'chart':
            return 'chart-' + scrollData['scroll-chart-name'];
        case 'map':
            return 'map-' + scrollData['scroll-map-name'];
        case 'html':
            return 'html-' + scrollData['scroll-html-name'];
    }
}

function checkFigureRegistryString(figureId, figureString) {
    /*
    Compare une chaîne de caractère à celle déjà existante dans le registre
     */
    return figureRegistry[figureId] === figureString;
}

function registerFigureRegistryString(figureId, figureString) {
    /*
    Enregistre une chaîne de caractères dans le registre des figures
     */
    figureRegistry[figureId] = figureString;
}

function cleanFigureIfNeeded(figureId, newFigureString) {
    /*
    Compare la nouvelle figure à l’ancienne grâce au registre des figures
    Si nécessaire, "nettoie" les illustrations qui ont besoin d’une fonction particulière pour être correctement
    supprimées de la mémoire (graphiques et cartes interactives).
     */
    const existingFigureString = figureRegistry[figureId];
    if (existingFigureString) {
        if (existingFigureString.startsWith('chart') && !newFigureString.startsWith('chart')) {
            // Si la figure existante est un graphique, mais pas la suivante
            chartRegistry[figureId].dispose();
            delete chartRegistry[figureId];
        } else if (existingFigureString.startsWith('map')) {
            // Si la figure existante est une carte
            const existingMapName = figureId + '-map';
            if (newFigureString.startsWith('map')) {
                // Si la nouvelle figure est également une carte
                /* ----------------------------------------------------
                BUG CHEZ LEAFLET
                https://github.com/Leaflet/Leaflet/issues/9542
                Tant que le bug n’est pas corrigé, on doit supprimer la carte et la recréer
                (moins optimisé)
                -------------------------------------------------------
                TODO: Enlever la partie suivante quand le bug est corrigé
                 */
                mapRegistry[existingMapName].remove();
                delete mapRegistry[existingMapName];
                /* Fin de la partie à enlever */
            } else {
                // Si la nouvelle figure n’est pas une carte
                mapRegistry[existingMapName].remove();
                delete mapRegistry[existingMapName];
            }
        }
    }
}

function scrollImg(scrollData) {
    /*
    Change une illustration par une image.
    Récupère le lien et l’alt de l’image dans les informations de l’évènement de scroll.
     */
    const element = document.getElementById(scrollData['scroll-figure']);
    element.innerHTML = '<img src="' + scrollData['scroll-img-link'] + '" alt="' + scrollData['scroll-img-alt'] + '">';
}

function scrollHtml(scrollData) {
    /*
    Change une illustration par un html custom
     */
    const element = document.getElementById(scrollData['scroll-figure']);
    element.innerHTML = customHtml[scrollData['scroll-html-name']];
}

function scrollChart(scrollData) {
    /*
    Change une illustration par un graphique.
    Récupère les informations à partir des dictionnaires de graphiques et du nom de graphique donné par l’évènement de
    scroll.
     */
    // Préparation du HTML
    const figureId = scrollData['scroll-figure'];

    // Création du graphique
    createOrUpdateChart(figureId, scrollData['scroll-chart-name']);
}

function scrollMap(scrollData) {
    /*
    Change une illustration par une carte interactive.
     */
    // Préparation des éléments à partir des informations des évènements de scroll
    const figureId = scrollData['scroll-figure'];
    const divId = figureId + '-map';
    const mapName = scrollData['scroll-map-name'];

    /* ----------------------------------------------------

     */
    const element = document.getElementById(figureId);
    element.innerHTML = '<div id="' + divId + '" style="height: 100%; width: 100%"></div>';
    createMap(divId);
    /* Fin de la partie à enlever, décommenter la partie suivante */
    /*
    // Récupération de l’information de la figure existante
    const existingFigureString = figureRegistry[figureId];
    if (existingFigureString && existingFigureString.startsWith('map')) {
        // Si la figure existante est déjà une carte, plutôt que d’en créer une nouvelle
        // on la vide
        removeLayersFromMap(divId);
    } else {
        // Sinon création d’une nouvelle carte
        const element = document.getElementById(figureId);
        element.innerHTML = '<div id="' + divId + '" style="height: 100%; width: 100%"></div>';
        createMap(divId);
    }
    */
    // On ajoute les couches à la carte
    addLayersToMap(divId, mapName);
    // On définit le point de vue de la carte
    setViewMapFromScroll(scrollData);
}

function scrollExistingMap(scrollData) {
    /*
    Actions à effectuer si le scroll concerne une carte déjà présente.
    Le but est d’effectuer des actions qui ne nécessitent pas une nouvelle carte et qui peuvent être données dans les
    informations de l’évènement de scroll.
    Actuellement, cela concerne uniquement le déplacement sur la carte.
     */
    setViewMapFromScroll(scrollData);
}


function createOrUpdateChart(figureId, chartName) {
    /*
    Cette fonction crée ou met à jour un graphique :
    - Elle récupère la configuration du graphique
    - Si un graphique n’existe pas encore encore, elle initialise le graphique
    - Elle passe la configuration au graphique
    Les changements sont gérés par la bibliothèque
     */
    // Récupération des informations
    const chartConfiguration = chartsConfigurations[chartName];
    if (!chartRegistry[figureId]) {
        // S’il n’y a pas déjà un graphique existant
        const figure = document.getElementById(figureId);
        // Création du graphique
        chartRegistry[figureId] = echarts.init(figure);
    }
    chartRegistry[figureId].setOption(chartConfiguration, true);
}


function createMap(divId) {
    /*
    Crée une carte à partir de l’ID de son container. Enregistre la carte dans le registre des cartes.
     */
    const mapContainer = document.getElementById(divId);
    mapRegistry[divId] = L.map(mapContainer, {preferCanvas: true, scrollWheelZoom: false});
}

async function addLayersToMap(divId, mapName) {
    /*
    Ajoute les couches mentionnées dans la configuration de la carte.
     */
    // Récupère la référence de la carte
    const map = mapRegistry[divId];
    // Récupère la configuration de la carte
    const mapConfig = mapConfigurations[mapName];
    // Récupère les couches, et les ajoute. Code asynchrone nécessaire pour les couches en GeoJSON
    const layers = await mapConfig.layers;
    for (let layer of layers) {
        (await layer).addTo(map);
    }
}

function removeLayersFromMap(divId) {
    /*
    Retire toutes les couches d’une carte interactive
     */
    const map = mapRegistry[divId];
    map.eachLayer((layer) => {
        map.removeLayer(layer)
    });
}

function setViewMap(divId, coordinates, zoom) {
    /*
    Modifie le pointe de vue d’une couche.
    Coordonnées au format WGS84 (latitude, longitude)
     */
    const map = mapRegistry[divId];
    map.setView(coordinates, zoom);
}

function setViewMapFromScroll(scrollData) {
    /*
    Déplace la vue d’une carte à partir des coordonnées contenues dans les infos de l’évènement de scroll, ou à partir
    des coordonnées par défaut.
     */
    const divId = scrollData['scroll-figure'] + '-map';
    const mapName = scrollData['scroll-map-name'];

    // Récupère les coordonnées depuis le scroll, et les formate au format Leaflet ([latitude, longitude])
    let coordinates = scrollData['scroll-map-coordinates'];
    if (coordinates) coordinates = coordinates.split(',').map(Number);
    // Sinon utilise les coordonnées par défaut
    else coordinates = mapConfigurations[mapName].coordinates;

    // Fait de même pour le zoom
    let zoom = scrollData['scroll-map-zoom'];
    if (zoom) zoom = Number(zoom);
    else zoom = mapConfigurations[mapName].zoom;
    setViewMap(divId, coordinates, zoom);
}

async function geoJsonToLayer(geoJson, options) {
    /*
    Fonction asynchrone pour créer une couche Leaflet à partir :
    - D’un fichier GeoJSON à récupérer par requête
    - De ses options au format objet défini par Leaflet
     */
    const response = await fetch(geoJson);
    const data = await response.json();
    return L.geoJson(data, options);
}


function stickyTitles() {
    /*
    Pour les éléments "sticky" qui doivent s’accrocher au titre de leur partie
    Va récupérer la hauteur du titre pour gérer le bon positionnement de l’élément sticky
    Attention :
    Ne fonctionne que si le titre est un voisin précédent, si c’est un parent, un voisin du parent… ça ne fonctionne pas
     */
    // On récupère les éléments qui veulent coller au titre
    let stickToTitlesElements = document.getElementsByClassName('stick-to-title');

    for (let element of stickToTitlesElements) {
        let title = findUpNeighborOrParentWithClass(element, 'sticky-title');
        element.style.setProperty('top', 'calc(var(--header-height) + ' + title.clientHeight + 'px)');
    }
}

function stickyAnchors() {
    let stickToAnchorsElements = document.getElementsByClassName('stick-to-anchor');

    for (let element of stickToAnchorsElements) {
        let anchor = findUpNeighborOrParentWithClass(element, 'sticky-anchor');

        let top;
        if (anchor.classList.contains('stick-to-title')) {
            top = anchor.style.getPropertyValue('top');
            top = top.slice(0, -1);
            top = top + ' + ' + anchor.clientHeight + 'px)';
        } else
            top = 'calc(var(--header-height) + ' + anchor.clientHeight + 'px)';

        element.style.setProperty('top', top);
    }
}

function stickyStacks() {
    let stickyStackElements = document.getElementsByClassName('sticky-stack');

    for (let element of stickyStackElements) {
        let neighbour = findUpNeighborWithClass(element, 'sticky-stack');
        if (!(neighbour === null)) {
            let top = neighbour.style.getPropertyValue('top');
            top = top.slice(0, -1);
            top = top + ' + ' + neighbour.clientHeight + 'px)';
            element.style.setProperty('top', top);
        }
    }
}

function findUpNeighborWithClass(element, className) {
    while (true) {
        if (element.previousElementSibling === null)
            return null;
        else
            element = element.previousElementSibling;
        if (element.classList.contains(className))
            return element;
    }
}

function findUpNeighborOrParentWithClass(baseElement, classToFind) {
    // Pour chaque élément
    let findy;
    let temp = baseElement;
    while (!findy) {
        if (temp.previousElementSibling === null)
            // Si besoin on remonte au parent
            temp = temp.parentElement;
        else
            // Sinon on remonte les voisins
            temp = temp.previousElementSibling;
        // Jusqu’à trouver celui qui a la bonne classe
        if (temp.classList.contains(classToFind))
            findy = temp;
    }
    return findy;
}

function stickyElements() {
    setTimeout(stickyTitles, 100);
    setTimeout(stickyAnchors, 150);
    setTimeout(stickyStacks, 200);
}

function resizeCharts() {
    for (let chart in chartRegistry) {
        chartRegistry[chart].resize();
    }
}

document.addEventListener("DOMContentLoaded", stickyElements);
window.addEventListener("resize", stickyElements);
window.addEventListener("resize", resizeCharts);