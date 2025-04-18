/* Constantes */


/*
La donnée est chargée avec en tête les exports de PostgreSQL :
- Un objet, avec comme clés les noms des datasets
- La valeur de chacun est une liste de toutes les lignes
- Une ligne est un objet, les clés étant les noms des colonnes
- Il doit obligatoirement y avoir une colonne "label" : il sert à donner les noms des valeurs / points
- Les noms des autres colonnes sont ceux des séries de données
 */
const data = {
    emploiSalarieNM: [
        {
            annee: '2010',
            emploiTotal: 240000,
            emploiSecteur1: 100,
            emploiSecteur1National: 100,
            emploiSecteur2: 100,
            emploiSecteur2National: 100,
            emploiSecteur3: 100,
            emploiSecteur3National: 100,
            emploiSecteur4: 100,
            emploiSecteur4National: 100,
            chomageNM: 8,
            chomageNational: 10,
        },
        {
            annee: '2023',
            emploiTotal: 314000,
            emploiSecteur1: 110,
            emploiSecteur1National: 80,
            emploiSecteur2: 120,
            emploiSecteur2National: 95,
            emploiSecteur3: 105,
            emploiSecteur3National: 120,
            emploiSecteur4: 95,
            emploiSecteur4National: 105,
            chomageNM: 5.5,
            chomageNational: 7.4,
        },
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
                dimensions: ['annee', 'emploiTotal'],
                source: data.emploiSalarieNM,
            },
            series: [
                {
                    name: 'Emploi salarié total',
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'emploiTotal',
                    },
                    color: colors.primary1,
                },
            ],
            xAxis: {
                type: 'time',
                name: 'Année',
                min: '2010',
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
                text: 'Évolution de l’emploi par secteur',
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
                    {name: 'Emploi salarié secteur 1'},
                    {name: 'Emploi salarié secteur 1 national'},
                ],
                formatter: function (name) {
                    if (name === 'Emploi salarié secteur 1') return 'Nantes Métropole';
                    if (name === 'Emploi salarié secteur 1 national') return 'National';
                    return 'Erreur';
                },
            },
            dataset: {
                dimensions: ['annee', 'emploiTotal', 'emploiSecteur1', 'emploiSecteur1National', 'emploiSecteur2', 'emploiSecteur2National', 'emploiSecteur3', 'emploiSecteur3National', 'emploiSecteur4', 'emploiSecteur4National'],
                source: data.emploiSalarieNM,
            },
            series: [
                {
                    name: 'Emploi salarié secteur 1',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'emploiSecteur1',
                    },
                    color: colors.primary1,
                },
                {
                    name: 'Emploi salarié secteur 1 national',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'emploiSecteur1National',
                    },
                    color: colors.primary2,
                },
                {
                    name: 'Emploi salarié secteur 2',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'emploiSecteur2',
                    },
                    color: colors.primary1,
                },
                {
                    name: 'Emploi salarié secteur 2 national',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'emploiSecteur2National',
                    },
                    color: colors.primary2,
                },
                {
                    name: 'Emploi salarié secteur 3',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'emploiSecteur3',
                    },
                    color: colors.primary1,
                },
                {
                    name: 'Emploi salarié secteur 3 national',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'emploiSecteur3National',
                    },
                    color: colors.primary2,
                },
                {
                    name: 'Emploi salarié secteur 4',
                    xAxisIndex: 3,
                    yAxisIndex: 3,
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'emploiSecteur4',
                    },
                    color: colors.primary1,
                },
                {
                    name: 'Emploi salarié secteur 4 national',
                    xAxisIndex: 3,
                    yAxisIndex: 3,
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'emploiSecteur4National',
                    },
                    color: colors.primary2,
                },
            ],
            xAxis: [
                {gridIndex: 0, type: 'time', min: '2010', max: '2023'},
                {gridIndex: 1, type: 'time', min: '2010', max: '2023'},
                {gridIndex: 2, type: 'time', min: '2010', max: '2023'},
                {gridIndex: 3, type: 'time', min: '2010', max: '2023'},
            ],
            yAxis: [
                {gridIndex: 0, type: 'value', min: 70, max: 130, name: 'Emploi secteur 1'},
                {gridIndex: 1, type: 'value', min: 70, max: 130, name: 'Emploi secteur 2'},
                {gridIndex: 2, type: 'value', min: 70, max: 130, name: 'Emploi secteur 3'},
                {gridIndex: 3, type: 'value', min: 70, max: 130, name: 'Emploi secteur 4'},
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
                dimensions: ['annee', 'emploiTotal', 'chomageNM', 'chomageNational'],
                source: data.emploiSalarieNM,
            },
            series: [
                {
                    name: 'Emploi salarié NM',
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'emploiTotal',
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
                        y: 'chomageNM',
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
                        y: 'chomageNational',
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
                min: '2010',
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

