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
        {"annee": "2012", "creationsetab": 6686, "redressements": null, "liquidations": null},
        {"annee": "2013", "creationsetab": 6400, "redressements": null, "liquidations": null},
        {"annee": "2014", "creationsetab": 7105, "redressements": null, "liquidations": null},
        {"annee": "2015", "creationsetab": 7014, "redressements": 205, "liquidations": 546},
        {"annee": "2016", "creationsetab": 7729, "redressements": 210, "liquidations": 442},
        {"annee": "2017", "creationsetab": 8491, "redressements": 165, "liquidations": 389},
        {"annee": "2018", "creationsetab": 9132, "redressements": 153, "liquidations": 415},
        {"annee": "2019", "creationsetab": 11103, "redressements": 198, "liquidations": 365},
        {"annee": "2020", "creationsetab": 11019, "redressements": 84, "liquidations": 245},
        {"annee": "2021", "creationsetab": 13571, "redressements": 57, "liquidations": 274},
        {"annee": "2022", "creationsetab": 12835, "redressements": 94, "liquidations": 374},
        {"annee": "2023", "creationsetab": 12254, "redressements": 168, "liquidations": 525},
        {"annee": "2024", "creationsetab": null, "redressements": 174, "liquidations": 589}
    ],
    ess: [
        {annee: '2010', emploiess: 100, emploiprivehorsess: 100, etabess: 100, etabprivehorsess: 100},
        {annee: '2011', emploiess: 100.7, emploiprivehorsess: 103.1, etabess: 99.4, etabprivehorsess: 100},
        {annee: '2012', emploiess: 99.6, emploiprivehorsess: 104.3, etabess: 100, etabprivehorsess: 102},
        {annee: '2013', emploiess: 101.2, emploiprivehorsess: 104.8, etabess: 102.3, etabprivehorsess: 102.7},
        {annee: '2014', emploiess: 102.3, emploiprivehorsess: 105.7, etabess: 104.6, etabprivehorsess: 102.9},
        {annee: '2015', emploiess: 102.9, emploiprivehorsess: 107.6, etabess: 104, etabprivehorsess: 104.3},
        {annee: '2016', emploiess: 101.7, emploiprivehorsess: 111, etabess: 104.1, etabprivehorsess: 105.5},
        {annee: '2017', emploiess: 100.5, emploiprivehorsess: 115, etabess: 102.5, etabprivehorsess: 108.4},
        {annee: '2018', emploiess: 101.3, emploiprivehorsess: 118.6, etabess: 100.7, etabprivehorsess: 110.4},
        {annee: '2019', emploiess: 103.2, emploiprivehorsess: 121.5, etabess: 100.8, etabprivehorsess: 113},
        {annee: '2020', emploiess: 103.8, emploiprivehorsess: 120.7, etabess: 100.4, etabprivehorsess: 115.7},
        {annee: '2021', emploiess: 108.5, emploiprivehorsess: 124.6, etabess: 104, etabprivehorsess: 120.4},
        {annee: '2022', emploiess: 109.3, emploiprivehorsess: 127.1, etabess: 106, etabprivehorsess: 122.5},

    ],
};
/*
Répertoire des configurations de graphiques, au format Apache Echarts
 */
const chartsConfigurations = {
    creationsEtablissements: {
        title: {text: "Création d’établissements sur Nantes Métropole"},
        grid: {},
        tooltip: {},
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
        textStyle: {fontSize: 14, fontFamily: "Poppins"},
        color: [colors.secondary1],
    },
    defaillancesEntreprises: {
        title: {text: "Défaillances d’entreprises"},
        grid: {},
        tooltip: {},
        legend: {top: "bottom"},
        dataset: {dimensions: ["annee", "redressements", "liquidations"], source: data.entreprises},
        series: [
            {
                name: "Liquidations judiciaires",
                type: "line",
                stack: true,
                smooth: true,
                areaStyle: {},
                encode: {x: "annee", y: "liquidations"},
            },
            {
                name: "Redressements judiciaires",
                type: "line",
                stack: true,
                smooth: true,
                areaStyle: {},
                encode: {x: "annee", y: "redressementss"},
            },
        ],
        xAxis: {type: "time", name: "Année", min: "2015", max: "2024", axisLabel: {showMinLabel: true, showMaxLabel: true}},
        yAxis: {type: "value"},
        textStyle: {fontSize: 14, fontFamily: "Poppins"},
        color: [colors.secondary1, colors.secondary1lighter],
    },
    ess: {
        title: {text: "L’Économie Sociale et Solidaire à Nantes Métropole"},
        grid: {right: 120},
        tooltip: {},
        dataset: {
            dimensions: ["annee", "emploiess", "emploiprivehorsess", "etabess", "etabprivehorsess"],
            source: data.ess
        },
        series: [
            {
                name: "Emplois ESS",
                type: "line",
                smooth: true,
                encode: {x: "annee", y: "emploiess"},
                endLabel: {show: true, formatter: '{a}', color: 'inherit', width: 110, overflow: 'break'},
                markLine: {
                    symbol: 'none',
                    label: {show: false},
                    lineStyle: {
                        color: "#555555",
                        width: 2,
                        type: 'solid',
                        opacity: 0.6,
                    },
                    data: [{yAxis: 100}],
                },
            },
            {
                name: "Emplois privés hors ESS",
                type: "line",
                smooth: true,
                encode: {x: "annee", y: "emploiprivehorsess"},
                endLabel: {show: true, formatter: '{a}', color: 'inherit', width: 110, overflow: 'break'},
            },
            {
                name: "Établissements ESS",
                type: "line",
                smooth: true,
                encode: {x: "annee", y: "etabess"},
                endLabel: {show: true, formatter: '{a}', color: 'inherit', width: 110, overflow: 'break'},
            },
            {
                name: "Établissements privés hors ESS",
                type: "line",
                smooth: true,
                encode: {x: "annee", y: "etabprivehorsess"},
                endLabel: {show: true, formatter: '{a}', color: 'inherit', width: 110, overflow: 'break'},
            },
        ],
        xAxis: {type: "time", name: "Année", min: "2010", max: "2022", axisLabel: {showMinLabel: true, showMaxLabel: true}},
        yAxis: {type: "value", min: 90, max: 130},
        textStyle: {fontSize: 14, fontFamily: "Poppins"},
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
const mapConfigurations = {};

/*
HTML customs
 */
const customHtml = {}

/*
Fonctions custom utilisées en paramètres des librairies de graphiques ou de cartes.
*/

