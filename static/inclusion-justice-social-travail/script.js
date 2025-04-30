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
            "chr_nantes_base": 100,
            "chr_fr_base": 100,
            "construction_nantes_base": 100,
            "construction_fr_base": 100,
            "autresservices_nantes_base": 100,
            "autresservices_fr_base": 100,
            "industrie_nantes_base": 100,
            "industrie_fr_base": 100,
            "tous_nantes_base": 100,
            "tous_fr_base": 100,
            "chr_nantes_valeur": 46039,
            "chr_fr_valeur": 3942036,
            "construction_nantes_valeur": 15776,
            "construction_fr_valeur": 1480991,
            "autresservices_nantes_valeur": 125994,
            "autresservices_fr_valeur": 7885931,
            "industrie_nantes_valeur": 30537,
            "industrie_fr_valeur": 3493744,
            "tous_nantes_valeur": 228536,
            "tous_fr_valeur": 17480508
        },
        {
            "annee": "2007",
            "chr_nantes_base": 102.982254175807,
            "chr_fr_base": 101.645088984474,
            "construction_nantes_base": 104.297667342799,
            "construction_fr_base": 104.697192623048,
            "autresservices_nantes_base": 103.16602377891,
            "autresservices_fr_base": 102.585934368434,
            "industrie_nantes_base": 100.186658807348,
            "industrie_fr_base": 99.2487142732839,
            "tous_nantes_base": 102.2512864494,
            "tous_fr_base": 101.634237403169,
            "chr_nantes_valeur": 47412,
            "chr_fr_valeur": 4006886,
            "construction_nantes_valeur": 16454,
            "construction_fr_valeur": 1550556,
            "autresservices_nantes_valeur": 129983,
            "autresservices_fr_valeur": 8089856,
            "industrie_nantes_valeur": 30594,
            "industrie_fr_valeur": 3467496,
            "tous_nantes_valeur": 233681,
            "tous_fr_valeur": 17766181
        },
        {
            "annee": "2008",
            "chr_nantes_base": 101.983101283694,
            "chr_fr_base": 101.84830884345,
            "construction_nantes_base": 110.541328600406,
            "construction_fr_base": 107.490592447895,
            "autresservices_nantes_base": 106.663809387749,
            "autresservices_fr_base": 103.810558322156,
            "industrie_nantes_base": 100.20303238694,
            "industrie_fr_base": 97.1539700676409,
            "tous_nantes_base": 103.571428571429,
            "tous_fr_base": 100.952586732605,
            "chr_nantes_valeur": 46952,
            "chr_fr_valeur": 4014897,
            "construction_nantes_valeur": 17439,
            "construction_fr_valeur": 1591926,
            "autresservices_nantes_valeur": 134390,
            "autresservices_fr_valeur": 8186429,
            "industrie_nantes_valeur": 30599,
            "industrie_fr_valeur": 3394311,
            "tous_nantes_valeur": 236698,
            "tous_fr_valeur": 17647025
        },
        {
            "annee": "2009",
            "chr_nantes_base": 99.7024262038706,
            "chr_fr_base": 100.238810604469,
            "construction_nantes_base": 110.306795131846,
            "construction_fr_base": 103.68881377402,
            "autresservices_nantes_base": 106.439195517247,
            "autresservices_fr_base": 103.309818460243,
            "industrie_nantes_base": 95.5398369191473,
            "industrie_fr_base": 91.8306263996446,
            "tous_nantes_base": 102.043004165646,
            "tous_fr_base": 98.6843860601763,
            "chr_nantes_valeur": 45902,
            "chr_fr_valeur": 3951450,
            "construction_nantes_valeur": 17402,
            "construction_fr_valeur": 1535622,
            "autresservices_nantes_valeur": 134107,
            "autresservices_fr_valeur": 8146941,
            "industrie_nantes_valeur": 29175,
            "industrie_fr_valeur": 3208327,
            "tous_nantes_valeur": 233205,
            "tous_fr_valeur": 17250532
        },
        {
            "annee": "2010",
            "chr_nantes_base": 101.448771693564,
            "chr_fr_base": 101.171678797454,
            "construction_nantes_base": 110.433569979716,
            "construction_fr_base": 103.558833240715,
            "autresservices_nantes_base": 109.379811737067,
            "autresservices_fr_base": 104.317575185479,
            "industrie_nantes_base": 92.7334053770835,
            "industrie_fr_base": 90.2722122742823,
            "tous_nantes_base": 104.159082157734,
            "tous_fr_base": 99.40942219757,
            "chr_nantes_valeur": 46706,
            "chr_fr_valeur": 3988224,
            "construction_nantes_valeur": 17422,
            "construction_fr_valeur": 1533697,
            "autresservices_nantes_valeur": 137812,
            "autresservices_fr_valeur": 8226412,
            "industrie_nantes_valeur": 28318,
            "industrie_fr_valeur": 3153880,
            "tous_nantes_valeur": 238041,
            "tous_fr_valeur": 17377272
        },
        {
            "annee": "2011",
            "chr_nantes_base": 103.160364039184,
            "chr_fr_base": 101.96606525156,
            "construction_nantes_base": 116.683569979716,
            "construction_fr_base": 102.963151025226,
            "autresservices_nantes_base": 112.854580376843,
            "autresservices_fr_base": 105.682512312116,
            "industrie_nantes_base": 94.3871369158725,
            "industrie_fr_base": 90.4064522185942,
            "tous_nantes_base": 107.033027619281,
            "tous_fr_base": 100.151591704314,
            "chr_nantes_valeur": 47494,
            "chr_fr_valeur": 4019539,
            "construction_nantes_valeur": 18408,
            "construction_fr_valeur": 1524875,
            "autresservices_nantes_valeur": 142190,
            "autresservices_fr_valeur": 8334050,
            "industrie_nantes_valeur": 28823,
            "industrie_fr_valeur": 3158570,
            "tous_nantes_valeur": 244609,
            "tous_fr_valeur": 17507007
        },
        {
            "annee": "2012",
            "chr_nantes_base": 105.249896826604,
            "chr_fr_base": 101.682912078936,
            "construction_nantes_base": 113.038793103448,
            "construction_fr_base": 101.183734404868,
            "autresservices_nantes_base": 113.803831928505,
            "autresservices_fr_base": 106.166056994412,
            "industrie_nantes_base": 95.1730687362871,
            "industrie_fr_base": 89.7069161335232,
            "tous_nantes_base": 107.443028669444,
            "tous_fr_base": 99.6383743538803,
            "chr_nantes_valeur": 48456,
            "chr_fr_valeur": 4008377,
            "construction_nantes_valeur": 17833,
            "construction_fr_valeur": 1498522,
            "autresservices_nantes_valeur": 143386,
            "autresservices_fr_valeur": 8372182,
            "industrie_nantes_valeur": 29063,
            "industrie_fr_valeur": 3134130,
            "tous_nantes_valeur": 245546,
            "tous_fr_valeur": 17417294
        },
        {
            "annee": "2013",
            "chr_nantes_base": 104.422337583353,
            "chr_fr_base": 100.924699825166,
            "construction_nantes_base": 112.157707910751,
            "construction_fr_base": 99.2634661520563,
            "autresservices_nantes_base": 115.102306459038,
            "autresservices_fr_base": 106.493006342561,
            "industrie_nantes_base": 95.7526934538429,
            "industrie_fr_base": 88.3537259741985,
            "tous_nantes_base": 107.978611684811,
            "tous_fr_base": 99.2070081716161,
            "chr_nantes_valeur": 48075,
            "chr_fr_valeur": 3978488,
            "construction_nantes_valeur": 17694,
            "construction_fr_valeur": 1470083,
            "autresservices_nantes_valeur": 145022,
            "autresservices_fr_valeur": 8397965,
            "industrie_nantes_valeur": 29240,
            "industrie_fr_valeur": 3086853,
            "tous_nantes_valeur": 246770,
            "tous_fr_valeur": 17341889
        },
        {
            "annee": "2014",
            "chr_nantes_base": 104.884988813832,
            "chr_fr_base": 100.775868104705,
            "construction_nantes_base": 110.630070993915,
            "construction_fr_base": 96.2330628612868,
            "autresservices_nantes_base": 116.784132577742,
            "autresservices_fr_base": 107.117992789945,
            "industrie_nantes_base": 95.2483872024102,
            "industrie_fr_base": 87.2867617089289,
            "tous_nantes_base": 108.911943851297,
            "tous_fr_base": 98.9442011639479,
            "chr_nantes_valeur": 48288,
            "chr_fr_valeur": 3972621,
            "construction_nantes_valeur": 17453,
            "construction_fr_valeur": 1425203,
            "autresservices_nantes_valeur": 147141,
            "autresservices_fr_valeur": 8447251,
            "industrie_nantes_valeur": 29086,
            "industrie_fr_valeur": 3049576,
            "tous_nantes_valeur": 248903,
            "tous_fr_valeur": 17295949
        },
        {
            "annee": "2015",
            "chr_nantes_base": 106.820304524425,
            "chr_fr_base": 101.510742164709,
            "construction_nantes_base": 107.188133874239,
            "construction_fr_base": 93.4926680850863,
            "autresservices_nantes_base": 120.231122116926,
            "autresservices_fr_base": 108.10428090228,
            "industrie_nantes_base": 93.5029636179061,
            "industrie_fr_base": 86.427711933101,
            "tous_nantes_base": 111.161917597228,
            "tous_fr_base": 99.3471814434683,
            "chr_nantes_valeur": 49179,
            "chr_fr_valeur": 4001590,
            "construction_nantes_valeur": 16910,
            "construction_fr_valeur": 1384618,
            "autresservices_nantes_valeur": 151484,
            "autresservices_fr_valeur": 8525029,
            "industrie_nantes_valeur": 28553,
            "industrie_fr_valeur": 3019563,
            "tous_nantes_valeur": 254045,
            "tous_fr_valeur": 17366392
        },
        {
            "annee": "2016",
            "chr_nantes_base": 109.750428984122,
            "chr_fr_base": 103.088277225271,
            "construction_nantes_base": 108.684077079108,
            "construction_fr_base": 92.6911102093125,
            "autresservices_nantes_base": 124.070987507342,
            "autresservices_fr_base": 109.646495765687,
            "industrie_nantes_base": 94.1742803811769,
            "industrie_fr_base": 85.8506232855069,
            "tous_nantes_base": 114.486120348654,
            "tous_fr_base": 100.407842838435,
            "chr_nantes_valeur": 50528,
            "chr_fr_valeur": 4063777,
            "construction_nantes_valeur": 17146,
            "construction_fr_valeur": 1372747,
            "autresservices_nantes_valeur": 156322,
            "autresservices_fr_valeur": 8646647,
            "industrie_nantes_valeur": 28758,
            "industrie_fr_valeur": 2999401,
            "tous_nantes_valeur": 261642,
            "tous_fr_valeur": 17551801
        },
        {
            "annee": "2017",
            "chr_nantes_base": 113.442950541932,
            "chr_fr_base": 104.35795106894,
            "construction_nantes_base": 113.736054766734,
            "construction_fr_base": 94.6480431008696,
            "autresservices_nantes_base": 127.698938044669,
            "autresservices_fr_base": 110.900120734001,
            "industrie_nantes_base": 95.4317712938403,
            "industrie_fr_base": 86.0658937804258,
            "tous_nantes_base": 118.709962544194,
            "tous_fr_base": 101.768009259227,
            "chr_nantes_valeur": 52228,
            "chr_fr_valeur": 4113828,
            "construction_nantes_valeur": 17943,
            "construction_fr_valeur": 1401729,
            "autresservices_nantes_valeur": 160893,
            "autresservices_fr_valeur": 8745507,
            "industrie_nantes_valeur": 29142,
            "industrie_fr_valeur": 3006922,
            "tous_nantes_valeur": 271295,
            "tous_fr_valeur": 17789565
        },
        {
            "annee": "2018",
            "chr_nantes_base": 115.664979691131,
            "chr_fr_base": 105.739952653908,
            "construction_nantes_base": 117.254056795132,
            "construction_fr_base": 97.1323931070479,
            "autresservices_nantes_base": 131.982475355969,
            "autresservices_fr_base": 112.685274573161,
            "industrie_nantes_base": 97.216491469365,
            "industrie_fr_base": 86.5944098937987,
            "tous_nantes_base": 122.312458431057,
            "tous_fr_base": 103.123135780722,
            "chr_nantes_valeur": 53251,
            "chr_fr_valeur": 4168307,
            "construction_nantes_valeur": 18498,
            "construction_fr_valeur": 1438522,
            "autresservices_nantes_valeur": 166290,
            "autresservices_fr_valeur": 8886283,
            "industrie_nantes_valeur": 29687,
            "industrie_fr_valeur": 3025387,
            "tous_nantes_valeur": 279528,
            "tous_fr_valeur": 18026448
        },
        {
            "annee": "2019",
            "chr_nantes_base": 118.74714915615,
            "chr_fr_base": 108.227144551699,
            "construction_nantes_base": 119.314148073022,
            "construction_fr_base": 101.118237720553,
            "autresservices_nantes_base": 135.467561947394,
            "autresservices_fr_base": 114.829029064545,
            "industrie_nantes_base": 100.275076137145,
            "industrie_fr_base": 87.2473484033175,
            "tous_nantes_base": 126.059351699513,
            "tous_fr_base": 105.161623449387,
            "chr_nantes_valeur": 54670,
            "chr_fr_valeur": 4266353,
            "construction_nantes_valeur": 18823,
            "construction_fr_valeur": 1497552,
            "autresservices_nantes_valeur": 170681,
            "autresservices_fr_valeur": 9055338,
            "industrie_nantes_valeur": 30621,
            "industrie_fr_valeur": 3048199,
            "tous_nantes_valeur": 288091,
            "tous_fr_valeur": 18382786
        },
        {
            "annee": "2020",
            "chr_nantes_base": 118.230196138057,
            "chr_fr_base": 105.66742668002,
            "construction_nantes_base": 120.670638945233,
            "construction_fr_base": 104.257352002814,
            "autresservices_nantes_base": 136.977157642427,
            "autresservices_fr_base": 114.895425790563,
            "industrie_nantes_base": 101.070832105315,
            "industrie_fr_base": 86.1843626779753,
            "tous_nantes_base": 126.066352784682,
            "tous_fr_base": 104.569769940324,
            "chr_nantes_valeur": 54432,
            "chr_fr_valeur": 4165448,
            "construction_nantes_valeur": 19037,
            "construction_fr_valeur": 1544042,
            "autresservices_nantes_valeur": 172583,
            "autresservices_fr_valeur": 9060574,
            "industrie_nantes_valeur": 30864,
            "industrie_fr_valeur": 3011061,
            "tous_nantes_valeur": 288107,
            "tous_fr_valeur": 18279327
        },
        {
            "annee": "2021",
            "chr_nantes_base": 124.298963921892,
            "chr_fr_base": 112.727078088582,
            "construction_nantes_base": 123.358265720081,
            "construction_fr_base": 107.805381666735,
            "autresservices_nantes_base": 144.191786910488,
            "autresservices_fr_base": 119.506891450103,
            "industrie_nantes_base": 102.757310803288,
            "industrie_fr_base": 87.2871051800017,
            "tous_nantes_base": 132.095162250149,
            "tous_fr_base": 109.154322059748,
            "chr_nantes_valeur": 57226,
            "chr_fr_valeur": 4443742,
            "construction_nantes_valeur": 19461,
            "construction_fr_valeur": 1596588,
            "autresservices_nantes_valeur": 181673,
            "autresservices_fr_valeur": 9424231,
            "industrie_nantes_valeur": 31379,
            "industrie_fr_valeur": 3049588,
            "tous_nantes_valeur": 301885,
            "tous_fr_valeur": 19080730
        },
        {
            "annee": "2022",
            "chr_nantes_base": 125.398032103217,
            "chr_fr_base": 114.671555510909,
            "construction_nantes_base": 125.221855983773,
            "construction_fr_base": 108.68803389082,
            "autresservices_nantes_base": 149.693636204899,
            "autresservices_fr_base": 122.578615004367,
            "industrie_nantes_base": 103.851065920031,
            "industrie_fr_base": 88.3970033293796,
            "tous_nantes_base": 136.196047887423,
            "tous_fr_base": 111.309270874737,
            "chr_nantes_valeur": 57732,
            "chr_fr_valeur": 4520394,
            "construction_nantes_valeur": 19755,
            "construction_fr_valeur": 1609660,
            "autresservices_nantes_valeur": 188605,
            "autresservices_fr_valeur": 9666465,
            "industrie_nantes_valeur": 31713,
            "industrie_fr_valeur": 3088365,
            "tous_nantes_valeur": 311257,
            "tous_fr_valeur": 19457426
        },
        {
            "annee": "2023",
            "chr_nantes_base": 126.0518256261,
            "chr_fr_base": 115.363304647649,
            "construction_nantes_base": 124.315415821501,
            "construction_fr_base": 107.87985882426,
            "autresservices_nantes_base": 152.153277140181,
            "autresservices_fr_base": 123.74925674597,
            "industrie_nantes_base": 106.146641778826,
            "industrie_fr_base": 89.3949871541819,
            "tous_nantes_base": 137.549445164,
            "tous_fr_base": 111.842705028939,
            "chr_nantes_valeur": 58033,
            "chr_fr_valeur": 4547663,
            "construction_nantes_valeur": 19612,
            "construction_fr_valeur": 1597691,
            "autresservices_nantes_valeur": 191704,
            "autresservices_fr_valeur": 9758781,
            "industrie_nantes_valeur": 32414,
            "industrie_fr_valeur": 3123232,
            "tous_nantes_valeur": 314350,
            "tous_fr_valeur": 19550673
        },
    ],
    chomage: [
        {
            annee: "2006",
            chomagenm: null,
            chomagefr: null,
            chomageparis: null,
            chomagelyon: null,
            chomagemarseille: null,
            chomagebordeaux: null,
            chomagetoulouse: null,
            chomagestrasbourg: null
        },
        {
            annee: "2023",
            chomagenm: null,
            chomagefr: null,
            chomageparis: null,
            chomagelyon: null,
            chomagemarseille: null,
            chomagebordeaux: null,
            chomagetoulouse: null,
            chomagestrasbourg: null
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
    tauxEmploi:
        [
            ["Statut", "15-64 ans", "15-24 ans", "25-54 ans", "55-64 ans", "Hommes", "Femmes"],
            ["Emploi", 67, 32, 70, 58, 69, 65],
            ["Chômage", 33, 68, 30, 42, 31, 35],
        ]
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
                dimensions: ['annee', 'tous_nantes_valeur'],
                source: data.emploi,
            },
            series: [
                {
                    name: 'Emploi salarié total',
                    type: 'line',
                    encode: {
                        x: 'annee',
                        y: 'tous_nantes_valeur',
                    },
                    color: colors.secondary1,
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
            title: {text: 'Évolution de l’emploi par secteur. Base 100 : 2006'},
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
                dimensions: [
                    'annee',
                    'chr_nantes_base',
                    'chr_fr_base',
                    'construction_nantes_base',
                    'construction_fr_base',
                    'autresservices_nantes_base',
                    'autresservices_fr_base',
                    'industrie_nantes_base',
                    'industrie_fr_base',
                ],
                source: data.emploi,
            },
            series: [
                {
                    name: 'Commerce / Hébergmt et Rest. NM',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    type: 'line',
                    encode: {x: 'annee', y: 'chr_nantes_base'},
                    color: colors.secondary1,
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
                    name: 'Commerce / Hébergmt et Rest. FR',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    type: 'line',
                    encode: {x: 'annee', y: 'chr_fr_base'},
                    color: colors.secondary1lighter,
                    lineStyle: {type: 'dotted'},
                },
                {
                    name: 'Construction NM',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    type: 'line',
                    encode: {x: 'annee', y: 'construction_nantes_base'},
                    color: colors.secondary1,
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
                    name: 'Construction FR',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    type: 'line',
                    encode: {x: 'annee', y: 'construction_fr_base'},
                    color: colors.secondary1lighter,
                    lineStyle: {type: 'dotted'},
                },
                {
                    name: 'Autres services hors interim NM',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    type: 'line',
                    encode: {
                        x: 'annee',
                        y: 'autresservices_nantes_base',
                    },
                    color: colors.secondary1,
                    markLine: {
                        symbol: 'none',
                        label: {show: false},
                        lineStyle: {color: "#555555", width: 2, type: 'solid', opacity: 0.6},
                        data: [{yAxis: 100}],
                    },
                },
                {
                    name: 'Autres services hors interim FR',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    type: 'line',
                    encode: {x: 'annee', y: 'autresservices_fr_base'},
                    color: colors.secondary1lighter,
                    lineStyle: {type: 'dotted'},
                },
                {
                    name: 'Industrie (et agriculture) NM',
                    xAxisIndex: 3,
                    yAxisIndex: 3,
                    type: 'line',
                    encode: {x: 'annee', y: 'industrie_nantes_base'},
                    color: colors.secondary1,
                    markLine: {
                        symbol: 'none',
                        label: {show: false},
                        lineStyle: {color: "#555555", width: 2, type: 'solid', opacity: 0.6},
                        data: [{yAxis: 100}],
                    },
                },
                {
                    name: 'Industrie (et agriculture) FR',
                    xAxisIndex: 3,
                    yAxisIndex: 3,
                    type: 'line',
                    encode: {x: 'annee', y: 'industrie_fr_base'},
                    color: colors.secondary1lighter,
                    lineStyle: {type: 'dotted'},
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
    chomageComparaison:
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
                dimensions: [
                    'annee',
                    'chomagenm',
                    'chomagefr',
                    "chomageparis",
                    "chomagelyon",
                    "chomagemarseille",
                    "chomagebordeaux",
                    "chomagetoulouse",
                    "chomagestrasbourg",
                ],
                source: data.chomage,
            },
            series: [
                {
                    name: 'Nantes Métropole',
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'chomagenm',
                    },
                },
                {
                    name: 'France',
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'chomagefr',
                    },
                    lineStyle: {
                        type: 'dotted',
                    },
                },
                {
                    name: 'Paris',
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'chomageparis',
                    },
                    lineStyle: {
                        type: 'dotted',
                    },
                },
                {
                    name: 'Lyon',
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'chomagelyon',
                    },
                    lineStyle: {
                        type: 'dotted',
                    },
                },
                {
                    name: 'Marseille',
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'chomagemarseille',
                    },
                    lineStyle: {
                        type: 'dotted',
                    },
                },
                {
                    name: 'Bordeaux',
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'chomagebordeaux',
                    },
                    lineStyle: {
                        type: 'dotted',
                    },
                },
                {
                    name: 'Toulouse',
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'chomagetoulouse',
                    },
                    lineStyle: {
                        type: 'dotted',
                    },
                },
                {
                    name: 'Strasbourg',
                    type: 'line',
                    smooth: true,
                    smoothMonotone: 'x',
                    encode: {
                        x: 'annee',
                        y: 'chomagestrasbourg',
                    },
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
            },
            yAxis: [
                {type: 'value', name: 'Taux de chômage'},
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
                    itemStyle: {
                        borderRadius: [30, 30, 0, 0],
                        opacity: 0.6,
                    },
                    label: {
                        show: true,
                        position: "top",
                        color: "inherit",
                        fontSize: 18,
                        fontWeight: "bold",
                        formatter: function (params) {
                            if (params.value[0] === "Taux de création d’établissements\nentre 2017 et 2023")
                                return "+" + params.value[params.seriesIndex + 1] + "%";
                            return params.value[params.seriesIndex + 1] + "%";
                        },
                    },
                },
                {
                    type: "bar",
                    seriesLayoutBy: "row",
                    itemStyle: {
                        borderRadius: [30, 30, 0, 0],
                        opacity: 0.6,
                    },
                    label: {
                        show: true,
                        position: "top",
                        color: "inherit",
                        fontSize: 18,
                        fontWeight: "bold",
                        formatter: function (params) {
                            if (params.value[0] === "Taux de création d’établissements\nentre 2017 et 2023")
                                return "+" + params.value[params.seriesIndex + 1] + "%";
                            return params.value[params.seriesIndex + 1] + "%";
                        },
                    },
                    barGap: "-30%",
                },
            ],
            color: [colors.secondary1, colors.primary1],
            textStyle: {
                fontSize: 14,
                fontFamily: "Poppins",
            },
        },
    tauxEmploi:
        {
            dataset: {
                source: data.tauxEmploi,
            },
            series: [
                {
                    type: "bar",
                    seriesLayoutBy: "row",
                },
                {
                    type: "bar",
                    seriesLayoutBy: "row",
                },
            ],
            xAxis: {
                type: "category",
                data: [
                    {value: "15-64 ans"},
                ]
            },
            yAxis: {},
            color: [colors.primary1, colors.secondary2],
            grid: {},
            legend: {},
        },
    tauxEmploiAge:
        {
            dataset: {
                source: data.tauxEmploi,
            },
            series: [
                {
                    type: "bar",
                    seriesLayoutBy: "row",
                },
                {
                    type: "bar",
                    seriesLayoutBy: "row",
                },
            ],
            xAxis: {
                type: "category",
                data: [
                    {value: "15-24 ans"},
                    {value: "25-54 ans"},
                    {value: "55-64 ans"},
                ]
            },
            yAxis: {},
            color: [colors.primary1, colors.secondary2],
            grid: {},
            legend: {},
        },
    tauxEmploiGenre:
        {
            dataset: {
                source: data.tauxEmploi,
            },
            series: [
                {
                    type: "bar",
                    seriesLayoutBy: "row",
                },
                {
                    type: "bar",
                    seriesLayoutBy: "row",
                },
            ],
            xAxis: {
                type: "category",
                data: [
                    {value: "Hommes"},
                    {value: "Femmes"},
                ]
            },
            yAxis: {},
            color: [colors.primary1, colors.secondary2],
            grid: {},
            legend: {},
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

