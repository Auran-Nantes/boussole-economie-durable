/* Constantes */


const titles = [
    'Réduction des GES',
    'Préservation des ressources',
    'Mobilité et logistique',
    'Régénération du vivant',
]


/*
La donnée est chargée avec en tête les exports de PostgreSQL :
- Un objet, avec comme clés les noms des datasets
- La valeur de chacun est une liste de toutes les lignes
- Une ligne est un objet, les clés étant les noms des colonnes
- Il doit obligatoirement y avoir une colonne "label" : il sert à donner les noms des valeurs / points
- Les noms des autres colonnes sont ceux des séries de données
 */
const data = {
    repartitionEmissions:
        [
            {'Secteur': 'Transport de marchandises', 'Émissions (t.eqCO2)': 42},
            {'Secteur': 'Tertiaire', 'Émissions (t.eqCO2)': 29},
            {'Secteur': 'Industrie', 'Émissions (t.eqCO2)': 23},
            {'Secteur': 'Agriculture', 'Émissions (t.eqCO2)': 4},
            {'Secteur': 'Déchets', 'Émissions (t.eqCO2)': 2},
        ]
};
/*
Répertoire des configurations de graphiques, au format Apache Echarts
 */
const chartsConfigurations = {
    graph1: {
        title: {
            text: 'Émissions de GES de Nantes Métropole',
        },
        dataset: {
            dimensions: ['Année', 'emissions', 'activiteseco', 'label'],
            source: [
                {
                    'Année': '2008',
                    emissions: 2530,
                    label: 'En 2008, les émissions de Nantes Métropole sont de plus de 2500 tonnes.'
                },
            ]
        },
        series: [
            {
                type: 'line',
                encode: {
                    x: 'Année',
                    y: 'emissions',
                },
                symbolSize: 7,
                label: {
                    show: true,
                    formatter: '{@label}',
                    align: 'left',
                },
            }
        ],
        xAxis: {
            type: 'time',
            min: '2008',
            max: '2021',
        },
        yAxis: {
            type: 'value',
            name: 'Émissions (t.eqC02)',
        },
    },
    graph2: {
        title: {
            text: 'Émissions de GES de Nantes Métropole',
        },
        dataset: {
            dimensions: ['Année', 'emissions', 'activiteseco', 'label'],
            source: [
                {'Année': '2008', 'emissions': 2530},
                {'Année': '2021', 'emissions': 2400, label: 'Entre 2008 et 2021, elles diminuent de 5,2%'},
            ]
        },
        series: [
            {
                type: 'line',
                encode: {
                    x: 'Année',
                    y: 'emissions',
                },
                symbolSize: 7,
                label: {
                    show: true,
                    formatter: '{@label}',
                    align: 'right',
                },
            }
        ],
        xAxis: {
            type: 'time',
            min: '2008',
        },
        yAxis: {
            type: 'value',
            name: 'Émissions (t.eqC02)',
        },
    },
    graph3: {
        title: {
            text: 'Émissions de GES de Nantes Métropole',
        },
        dataset: {
            dimensions: ['Année', 'emissions', 'activiteseco', 'label'],
            source: [
                {'Année': '2008', 'emissions': 2530, activiteseco: 1310},
                {
                    'Année': '2021',
                    'emissions': 2400,
                    activiteseco: 1200,
                    label: 'Les émissions des activités économiques baissent de 8,6%',
                },
            ]
        },
        series: [
            {
                type: 'line',
                encode: {
                    x: 'Année',
                    y: 'emissions',
                },
                symbolSize: 7,
                label: {
                    show: false,
                },
            },
            {
                type: 'line',
                encode: {
                    x: 'Année',
                    y: 'activiteseco',
                },
                symbolSize: 7,
                label: {
                    show: true,
                    formatter: '{@label}',
                    align: 'right',
                    position: 'bottom',
                },
            }
        ],
        xAxis: {
            type: 'time',
            min: '2008',
            max: '2021',
        },
        yAxis: {
            type: 'value',
            name: 'Émissions (t.eqC02)',
        },
    },
    repartitionEmissions:
        {
            title: {
                text: 'Répartition des émissions de gaz à effet de serre des activités économiques',
            },
            tooltip: {},
            dataset: {
                dimensions: ['Secteur', 'Émissions (t.eqCO2)'],
                source: data['repartitionEmissions'],
            },
            series: [{type: 'pie', radius: ['30%', '60%']}],
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
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
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
    habitants: // Polygones des endroits en France où il y a des habitants
        geoJsonToLayer('data/habitants_ici_simplif.geojson',
            {
                style: {
                    color: '#fa210f',
                    weight: 0,
                    opacity: 0.6
                }
            }
        )
};

/*
Configurations des cartes, sous forme d’un dictionnaire.
Les clés sont les noms des cartes (à renseigner dans l’attribut scroll-map-name dans le HTML)
Chaque configuration est un objet contenant :
- layers : une liste des couches à ajouter à la carte, dans l’ordre (de la couche du dessous à la couche du dessus)
- coordinates : coordonnées par défaut de la carte (au format WGS84)
- zoom : niveau de zoom par défaut (6 est le niveau nécessaire pour afficher toute la France Métropolitaine)
 */
const mapConfigurations = {
    habitants: // Carte des endroits où il y a des habitants
        {
            layers: [mapLayers.osm, mapLayers.habitants],
            coordinates: [47, 3],
            zoom: 6,
        },
};

/*
HTML customs
 */
const customHtml = {}


// JavaScript pour ajuster dynamiquement la marge supérieure de la deuxième boîte
document.addEventListener("DOMContentLoaded", stickyOffsets);

window.addEventListener("resize", stickyOffsets);

function stickyOffsets() {
    const firstBox = document.getElementById("boite1");
    const secondBox = document.getElementById("boite2");

    // Ajustons dynamiquement la marge supérieure de la deuxième boîte
    secondBox.style.top = 'calc(var(--bulma-navbar-height) * 2 + 10px + ' + firstBox.offsetHeight + 'px)';
}