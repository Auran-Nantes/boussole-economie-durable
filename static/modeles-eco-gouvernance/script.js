/* Constantes */


/*
La donnée est chargée avec en tête les exports de PostgreSQL :
- Un objet, avec comme clés les noms des datasets
- La valeur de chacun est une liste de toutes les lignes
- Une ligne est un objet, les clés étant les noms des colonnes
- Il doit obligatoirement y avoir une colonne "label" : il sert à donner les noms des valeurs / points
- Les noms des autres colonnes sont ceux des séries de données
Exemple de requête SQL :
select json_agg(part2_sect1_emploi)
from scrollyboussole.part2_sect1_emploi
 */
const data = {
    entreprises: [
        {annee: "2012", creationsetab: 6000, redressementsJudiciaire: 200, liquidationsJudiciaires: 400},
        {annee: "2023", creationsetab: 6000, redressementsJudiciaire: 200, liquidationsJudiciaires: 400},
    ],
    ess: [
        {annee: "2012", emploiess: 600, emploiprivehorsess: 200, etabess: 400, etabprivehorsess: 500},
        {annee: "2023", emploiess: 600, emploiprivehorsess: 200, etabess: 400, etabprivehorsess: 500},
    ],
};
/*
Répertoire des configurations de graphiques, au format Apache Echarts
 */
const chartsConfigurations = {
    creationsEtablissements: {
        title: {text: "Création d’établissements"},
        grid: {},
        tooltip: {},
        legend: {top: "bottom"},
        dataset: {dimensions: ["annee", "creationsetab"], source: data.entreprises},
        series: [
            {
                name: "Créations d’établissements",
                type: "bar",
                encode: {
                    x: "annee",
                    y: "creationsetab",
                }
            },
        ],
        xAxis: {type: "time", name: "Année", min: "2012", max: "2023"},
        yAxis: {type: "value"},
        textStyle: {fontSize: 14,fontFamily: "Poppins"},
        color: [colors.secondary1],
    },
    defaillancesEntreprises: {
        title: {text: "Défaillances d’entreprises"},
        grid: {},
        tooltip: {},
        legend: {top: "bottom"},
        dataset: {dimensions: ["annee", "redressementsJudiciaire", "liquidationsJudiciaires"], source: data.entreprises},
        series: [
            {
                name: "Liquidations judiciaires",
                type: "line",
                stack: true,
                smooth: true,
                smoothMonotone: "x",
                areaStyle: {},
                encode: {x: "annee", y: "liquidationsJudiciaires"},
            },
            {
                name: "Redressements judiciaires",
                type: "line",
                stack: true,
                smooth: true,
                smoothMonotone: "x",
                areaStyle: {},
                encode: {x: "annee", y: "redressementsJudiciaires"},
            },
        ],
        xAxis: {type: "time", name: "Année", min: "2012", max: "2023"},
        yAxis: {type: "value"},
        textStyle: {fontSize: 14,fontFamily: "Poppins"},
        color: [colors.secondary1, colors.secondary1lighter],
    },
    ess: {
        title: {text: "L’ESS à Nantes Métropole"},
        grid: {right: 120},
        tooltip: {},
        dataset: {dimensions: ["annee", "emploiess", "emploiprivehorsess", "etabess", "etabprivehorsess"], source: data.ess},
        series: [
            {
                name: "Emplois ESS",
                type: "line",
                smooth: true,
                smoothMonotone: "x",
                encode: {x: "annee", y: "emploiess"},
                endLabel: {show: true, formatter: '{a}', color: 'inherit', width: 110, overflow: 'break'},
            },
            {
                name: "Emplois privés hors ESS",
                type: "line",
                smooth: true,
                smoothMonotone: "x",
                encode: {x: "annee", y: "emploiprivehorsess"},
                endLabel: {show: true, formatter: '{a}', color: 'inherit', width: 110, overflow: 'break'},
            },
            {
                name: "Établissements ESS",
                type: "line",
                smooth: true,
                smoothMonotone: "x",
                encode: {x: "annee", y: "etabess"},
                endLabel: {show: true, formatter: '{a}', color: 'inherit', width: 110, overflow: 'break'},
            },
            {
                name: "Établissements privés hors ESS",
                type: "line",
                smooth: true,
                smoothMonotone: "x",
                encode: {x: "annee", y: "etabprivehorsess"},
                endLabel: {show: true, formatter: '{a}', color: 'inherit', width: 110, overflow: 'break'},
            },
        ],
        xAxis: {type: "time", name: "Année", min: "2012", max: "2023"},
        yAxis: {type: "value"},
        textStyle: {fontSize: 14,fontFamily: "Poppins"},
        color: [colors.secondary2, colors.secondary2lighter, colors.primary1, colors.primary1lighter],
    },
};
/*
Répertoire des "hooks" : des fonctions à exécuter avant ou après certains évènements de scroll
 */
const hooks = {};

/*
Un petit dictionnaire de couches utilisées dans les différentes cartes interactives. Elles sont à renseigner
directement dans un format couches Leaflet.
osm est la couche de base qui est le fond de cartes.
La fonction geoJsonToLayer permet de charger une couche GeoJSON :
- Mettre le lien relatif vers le fichier
- Rentrer les options au format Leaflet (notamment couleur, opacité)
Les couches doivent être en WGS84
 */
const mapLayers = {
        osm: L.tileLayer('https://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            opacity: 0.8,
            /* Quelques autres liens pour layer de base utilisables :
            Fond OpenStreetMap par défaut :
            https://tile.openstreetmap.org/{z}/{x}/{y}.png
            OpenStreetMap France :
            https://b.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png
            Fond très clair, bien quand très zoomé pour avoir un détail de rue et de bâti sans être très présent
            https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png
            Fond coloré mais plus doux qu’OSM, bien plutôt pour des cartos à l’échelle région
            https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png
            Fond "humanitaire" d’OSM France, ilébo :
            https://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png
            */
        }),
    }
;

/*
Configurations des cartes, sous forme d’un dictionnaire.
Les clés sont les noms des cartes (à renseigner dans l’attribut scroll-map-name dans le HTML)
Chaque configuration est un objet contenant :
- layers : une liste des couches à ajouter à la carte, dans l’ordre (de la couche du dessous à la couche du dessus)
- coordinates : coordonnées par défaut de la carte (au format WGS84)
- zoom : niveau de zoom par défaut (6 est le niveau nécessaire pour afficher toute la France Métropolitaine)
 */
const mapConfigurations = {
};

/*
HTML customs
 */
const customHtml = {}

/*
Fonctions custom utilisées en paramètres des librairies de graphiques ou de cartes.
*/

