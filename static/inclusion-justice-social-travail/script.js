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
    emploi: [
        {
            "annee": "2006",
            "emploinm": null,
            "emploichrnm": 100,
            "emploichrfr": 100,
            "emploiconstructionnm": 100,
            "emploiconstructionfr": 100,
            "emploiautresservicesnm": 100,
            "emploiautresservicesfr": 100,
            "emploiindustrienm": 100,
            "emploiindustriefr": 100,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2007",
            "emploinm": null,
            "emploichrnm": 102.982254,
            "emploichrfr": 101.645089,
            "emploiconstructionnm": 104.297667,
            "emploiconstructionfr": 104.697193,
            "emploiautresservicesnm": 103.166024,
            "emploiautresservicesfr": 102.585934,
            "emploiindustrienm": 100.186659,
            "emploiindustriefr": 99.2487143,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2008",
            "emploinm": null,
            "emploichrnm": 101.983101,
            "emploichrfr": 101.848309,
            "emploiconstructionnm": 110.541329,
            "emploiconstructionfr": 107.490592,
            "emploiautresservicesnm": 106.663809,
            "emploiautresservicesfr": 103.810558,
            "emploiindustrienm": 100.203032,
            "emploiindustriefr": 97.1539701,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2009",
            "emploinm": null,
            "emploichrnm": 99.7024262,
            "emploichrfr": 100.238811,
            "emploiconstructionnm": 110.306795,
            "emploiconstructionfr": 103.688814,
            "emploiautresservicesnm": 106.439196,
            "emploiautresservicesfr": 103.309818,
            "emploiindustrienm": 95.5398369,
            "emploiindustriefr": 91.8306264,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2010",
            "emploinm": null,
            "emploichrnm": 101.448772,
            "emploichrfr": 101.171679,
            "emploiconstructionnm": 110.43357,
            "emploiconstructionfr": 103.558833,
            "emploiautresservicesnm": 109.379812,
            "emploiautresservicesfr": 104.317575,
            "emploiindustrienm": 92.7334054,
            "emploiindustriefr": 90.2722123,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2011",
            "emploinm": null,
            "emploichrnm": 103.160364,
            "emploichrfr": 101.966065,
            "emploiconstructionnm": 116.68357,
            "emploiconstructionfr": 102.963151,
            "emploiautresservicesnm": 112.85458,
            "emploiautresservicesfr": 105.682512,
            "emploiindustrienm": 94.3871369,
            "emploiindustriefr": 90.4064522,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2012",
            "emploinm": null,
            "emploichrnm": 105.249897,
            "emploichrfr": 101.682912,
            "emploiconstructionnm": 113.038793,
            "emploiconstructionfr": 101.183734,
            "emploiautresservicesnm": 113.803832,
            "emploiautresservicesfr": 106.166057,
            "emploiindustrienm": 95.1730687,
            "emploiindustriefr": 89.7069161,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2013",
            "emploinm": null,
            "emploichrnm": 104.422338,
            "emploichrfr": 100.9247,
            "emploiconstructionnm": 112.157708,
            "emploiconstructionfr": 99.2634662,
            "emploiautresservicesnm": 115.102306,
            "emploiautresservicesfr": 106.493006,
            "emploiindustrienm": 95.7526935,
            "emploiindustriefr": 88.353726,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2014",
            "emploinm": null,
            "emploichrnm": 104.884989,
            "emploichrfr": 100.775868,
            "emploiconstructionnm": 110.630071,
            "emploiconstructionfr": 96.2330629,
            "emploiautresservicesnm": 116.784133,
            "emploiautresservicesfr": 107.117993,
            "emploiindustrienm": 95.2483872,
            "emploiindustriefr": 87.2867617,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2015",
            "emploinm": null,
            "emploichrnm": 106.820305,
            "emploichrfr": 101.510742,
            "emploiconstructionnm": 107.188134,
            "emploiconstructionfr": 93.4926681,
            "emploiautresservicesnm": 120.231122,
            "emploiautresservicesfr": 108.104281,
            "emploiindustrienm": 93.5029636,
            "emploiindustriefr": 86.4277119,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2016",
            "emploinm": null,
            "emploichrnm": 109.750429,
            "emploichrfr": 103.088277,
            "emploiconstructionnm": 108.684077,
            "emploiconstructionfr": 92.6911102,
            "emploiautresservicesnm": 124.070988,
            "emploiautresservicesfr": 109.646496,
            "emploiindustrienm": 94.1742804,
            "emploiindustriefr": 85.8506233,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2017",
            "emploinm": null,
            "emploichrnm": 113.442951,
            "emploichrfr": 104.357951,
            "emploiconstructionnm": 113.736055,
            "emploiconstructionfr": 94.6480431,
            "emploiautresservicesnm": 127.698938,
            "emploiautresservicesfr": 110.900121,
            "emploiindustrienm": 95.4317713,
            "emploiindustriefr": 86.0658938,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2018",
            "emploinm": null,
            "emploichrnm": 115.66498,
            "emploichrfr": 105.739953,
            "emploiconstructionnm": 117.254057,
            "emploiconstructionfr": 97.1323931,
            "emploiautresservicesnm": 131.982475,
            "emploiautresservicesfr": 112.685275,
            "emploiindustrienm": 97.2164915,
            "emploiindustriefr": 86.5944099,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2019",
            "emploinm": null,
            "emploichrnm": 118.747149,
            "emploichrfr": 108.227145,
            "emploiconstructionnm": 119.314148,
            "emploiconstructionfr": 101.118238,
            "emploiautresservicesnm": 135.467562,
            "emploiautresservicesfr": 114.829029,
            "emploiindustrienm": 100.275076,
            "emploiindustriefr": 87.2473484,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2020",
            "emploinm": null,
            "emploichrnm": 118.230196,
            "emploichrfr": 105.667427,
            "emploiconstructionnm": 120.670639,
            "emploiconstructionfr": 104.257352,
            "emploiautresservicesnm": 136.977158,
            "emploiautresservicesfr": 114.895426,
            "emploiindustrienm": 101.070832,
            "emploiindustriefr": 86.1843627,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2021",
            "emploinm": null,
            "emploichrnm": 124.298964,
            "emploichrfr": 112.727078,
            "emploiconstructionnm": 123.358266,
            "emploiconstructionfr": 107.805382,
            "emploiautresservicesnm": 144.191787,
            "emploiautresservicesfr": 119.506891,
            "emploiindustrienm": 102.757311,
            "emploiindustriefr": 87.2871052,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2022",
            "emploinm": null,
            "emploichrnm": 125.398032,
            "emploichrfr": 114.671556,
            "emploiconstructionnm": 125.221856,
            "emploiconstructionfr": 108.688034,
            "emploiautresservicesnm": 149.693636,
            "emploiautresservicesfr": 122.578615,
            "emploiindustrienm": 103.851066,
            "emploiindustriefr": 88.3970033,
            "chomagenm": null,
            "chomagefr": null
        },
        {
            "annee": "2023",
            "emploinm": null,
            "emploichrnm": 126.051826,
            "emploichrfr": 115.363305,
            "emploiconstructionnm": 124.315416,
            "emploiconstructionfr": 107.879859,
            "emploiautresservicesnm": 152.153277,
            "emploiautresservicesfr": 123.749257,
            "emploiindustrienm": 106.146642,
            "emploiindustriefr": 89.3949872,
            "chomagenm": null,
            "chomagefr": null
        }
    ],
    qpv:
        [
            [
                "Secteur",
                "Taux d’emploi\ndes 15-64 ans en 2021",
                "Taux de création d’établissements\nentre 2017 et 2023",
                "Part d’entreprises individuelles\ndans les créations d’entreprises en 2023"
            ],
            ["QPV", 55, 74, 88],
            ["Nantes Métropole", 67, 43, 74],
        ],
};
/*
Répertoire des configurations de graphiques, au format Apache Echarts
 */
const chartsConfigurations = {
    emploiSalarieNM:
        {
            title: {
                text: 'Évolution de l’emploi',
            },
            grid: {},
            tooltip: {},
            legend: {
                top: 'bottom',
            },
            dataset: {
                dimensions: ['annee', 'emploinm'],
                source: data.emploi,
            },
            series: [
                {
                    name: 'Emploi salarié total',
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'emploinm',
                    },
                    color: colors.primary1,
                },
            ],
            xAxis: {
                type: 'time',
                name: 'Année',
                min: '2006',
                max: '2023',
            },
            yAxis: {
                type: 'value',
                name: 'Emploi',
            },
            textStyle: {
                fontSize: 14,
                fontFamily: "Poppins",
            },
        },
    emploiSalarieSecteurs:
        {
            title: {
                text: 'Évolution de l’emploi par secteur. Base 100 : 2006',
            },
            grid: [
                {right: '55%', bottom: '55%'},
                {left: '55%', bottom: '55%'},
                {right: '55%', top: '55%'},
                {left: '55%', top: '55%'},
            ],
            tooltip: {},
            legend: {
                top: 'bottom',
                selectedMode: false,
                data: [
                    {name: 'Commerce / Hébergmt et Rest. NM'},
                    {name: 'Commerce / Hébergmt et Rest. FR'},
                ],
                formatter: function (name) {
                    if (name === 'Commerce / Hébergmt et Rest. NM') return 'Nantes Métropole';
                    if (name === 'Commerce / Hébergmt et Rest. FR') return 'National';
                    return 'Erreur';
                },
            },
            dataset: {
                dimensions: ['annee', 'emploichrnm', 'emploichrfr', 'emploiconstructionnm', 'emploiconstructionfr', 'emploiautresservicesnm', 'emploiautresservicesfr', 'emploiindustrienm', 'emploiindustriefr'],
                source: data.emploi,
            },
            series: [
                {
                    name: 'Commerce / Hébergmt et Rest. NM',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    type: 'line',
                    encode: {
                        x: 'annee',
                        y: 'emploichrnm',
                    },
                    color: colors.primary1,
                    markLine: {
                        symbol: 'none',
                        label: {
                            show: false,
                        },
                        lineStyle: {
                            color: colors.primary3,
                            width: 3,
                            type: 'solid',
                            opacity: 0.6,
                        },
                        data: [
                            {
                                yAxis: 100,
                            }
                        ]
                    },
                },
                {
                    name: 'Commerce / Hébergmt et Rest. FR',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    type: 'line',
                    encode: {
                        x: 'annee',
                        y: 'emploichrfr',
                    },
                    color: colors.primary2,
                    lineStyle: {
                        type: 'dotted',
                    },
                },
                {
                    name: 'Construction NM',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    type: 'line',
                    encode: {
                        x: 'annee',
                        y: 'emploiconstructionnm',
                    },
                    color: colors.primary1,
                    markLine: {
                        symbol: 'none',
                        label: {
                            show: false,
                        },
                        lineStyle: {
                            color: colors.primary3,
                            width: 3,
                            type: 'solid',
                            opacity: 0.6,
                        },
                        data: [
                            {
                                yAxis: 100,
                            }
                        ]
                    },
                },
                {
                    name: 'Construction FR',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    type: 'line',
                    encode: {
                        x: 'annee',
                        y: 'emploiconstructionfr',
                    },
                    color: colors.primary2,
                    lineStyle: {
                        type: 'dotted',
                    },
                },
                {
                    name: 'Autres services hors interim NM',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    type: 'line',
                    encode: {
                        x: 'annee',
                        y: 'emploiautresservicesnm',
                    },
                    color: colors.primary1,
                    markLine: {
                        symbol: 'none',
                        label: {
                            show: false,
                        },
                        lineStyle: {
                            color: colors.primary3,
                            width: 3,
                            type: 'solid',
                            opacity: 0.6,
                        },
                        data: [
                            {
                                yAxis: 100,
                            }
                        ]
                    },
                },
                {
                    name: 'Autres services hors interim FR',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    type: 'line',
                    encode: {
                        x: 'annee',
                        y: 'emploiautresservicesfr',
                    },
                    color: colors.primary2,
                    lineStyle: {
                        type: 'dotted',
                    },
                },
                {
                    name: 'Industrie (et agriculture) NM',
                    xAxisIndex: 3,
                    yAxisIndex: 3,
                    type: 'line',
                    encode: {
                        x: 'annee',
                        y: 'emploiindustrienm',
                    },
                    color: colors.primary1,
                    markLine: {
                        symbol: 'none',
                        label: {
                            show: false,
                        },
                        lineStyle: {
                            color: colors.primary3,
                            width: 3,
                            type: 'solid',
                            opacity: 0.6,
                        },
                        data: [
                            {
                                yAxis: 100,
                            }
                        ]
                    },
                },
                {
                    name: 'Industrie (et agriculture) FR',
                    xAxisIndex: 3,
                    yAxisIndex: 3,
                    type: 'line',
                    encode: {
                        x: 'annee',
                        y: 'emploiindustriefr',
                    },
                    color: colors.primary2,
                    lineStyle: {
                        type: 'dotted',
                    },
                },
            ],
            xAxis: [
                {gridIndex: 0, type: 'time', min: '2006', max: '2023'},
                {gridIndex: 1, type: 'time', min: '2006', max: '2023'},
                {gridIndex: 2, type: 'time', min: '2006', max: '2023'},
                {gridIndex: 3, type: 'time', min: '2006', max: '2023'},
            ],
            yAxis: [
                {
                    gridIndex: 0,
                    type: 'value',
                    min: 80,
                    max: 160,
                    name: 'Commerce, Hôtellerie, Restauration',
                    nameTextStyle: {align: 'left'},
                },
                {gridIndex: 1, type: 'value', min: 80, max: 160, name: 'Construction', nameTextStyle: {align: 'left'}},
                {
                    gridIndex: 2,
                    type: 'value',
                    min: 80,
                    max: 160,
                    name: 'Autres services',
                    nameTextStyle: {align: 'left'}
                },
                {gridIndex: 3, type: 'value', min: 80, max: 160, name: 'Industrie', nameTextStyle: {align: 'left'}},
            ],
            textStyle: {
                fontSize: 14,
                fontFamily: "Poppins",
            },
        },
    chomageNM:
        {
            title: {
                text: 'Évolution de l’emploi',
            },
            grid: {},
            tooltip: {},
            legend: {
                top: 'bottom',
            },
            dataset: {
                dimensions: ['annee', 'emploinm', 'chomagenm', 'chomagefr'],
                source: data.emploi,
            },
            series: [
                {
                    name: 'Emploi salarié NM',
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'emploinm',
                    },
                    color: colors.primary1,
                },
                {
                    name: 'Taux de chômage NM',
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    yAxisIndex: 1,
                    encode: {
                        x: 'annee',
                        y: 'chomagenm',
                    },
                    color: colors.primary2,
                },
                {
                    name: 'Taux de chômage France',
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    yAxisIndex: 1,
                    encode: {
                        x: 'annee',
                        y: 'chomagefr',
                    },
                    color: colors.primary2,
                    lineStyle: {
                        type: 'dotted',
                    },
                },
            ],
            xAxis: {
                type: 'time',
                name: 'Année',
                min: '2006',
                max: '2023',
                nameLocation: 'middle',
                nameGap: 25,
            },
            yAxis: [
                {type: 'value', name: 'Emploi'},
                {type: 'value', name: 'Taux de chômage', position: 'right', alignTicks: true}, // alignTicks aligne les lignes, sinon axisLine: {show = false} pour les désactiver
            ],
            textStyle: {
                fontSize: 14,
                fontFamily: "Poppins",
            },
        },
    qpv:
        {
            grid: {},
            legend: {},
            dataset: {
                source: data.qpv,
            },
            xAxis: {
                type: "category",
                axisLabel: {
                    interval: 0,
                    width: "auto",
                    overflow: "break",
                }
            },
            yAxis: {},
            series: [
                {
                    type: "bar",
                    seriesLayoutBy: "row",
                    itemStyle: {borderRadius: [30, 30, 0, 0]},
                    label: {
                        show: true,
                        position: "top",
                        color: "inherit",
                        fontSize: 18,
                        fontWeight: "bold",
                        formatter: function (params) {
                            console.log(params.value);
                            return "+" + params.value[params.seriesIndex + 1] + "%";
                        },
                    },
                },
                {
                    type: "bar",
                    seriesLayoutBy: "row",
                    itemStyle: {borderRadius: [30, 30, 0, 0]},
                    label: {
                        show: true,
                        position: "top",
                        color: "inherit",
                        fontSize: 18,
                        fontWeight: "bold",
                        formatter: function (params) {
                            console.log(params.value);
                            return "+" + params.value[params.seriesIndex + 1] + "%";
                        },
                    },
                    barGap: "-30%",
                },
            ],
            color: ["#1064B388", "#D5821288"],
            textStyle: {
                fontSize: 14,
                fontFamily: "Poppins",
            },
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
    entreprises: {
        layers: [mapLayers.osm],
        coordinates: [47.22, -1.56],
        zoom: 12,
    },
};

/*
HTML customs
 */
const customHtml = {}

/*
Fonctions custom utilisées en paramètres des librairies de graphiques ou de cartes.
*/

