var MARKETPLACE_URL = "https://gazmin-marketplace.facsiaginsa.com";
var STREETVIEW_URL = "https://gazmin-streetview.facsiaginsa.com";
var MINIO_URL = "https://gazmin-minio.facsiaginsa.com";
// var APP_DATA = {
//     "scenes": [
//         {
//             "id": "0-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "1-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.5699742639507228,
//                     "pitch": 0.2589076299340807,
//                     "title": "Lumpia Basah Arcamanik",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "1-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "2-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "0-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.591096039516918,
//                     "pitch": 0.35997448857602343,
//                     "title": "Rujak Jambu Kristal",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "2-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "3-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "1-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.4221537970488445,
//                     "pitch": 0.3149911995749157,
//                     "title": "Tempe Mendoan &amp; Gehu Pedas",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "3-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "4-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "2-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.5717571331727527,
//                     "pitch": 0.2817420738292622,
//                     "title": "Nasi Gudeg Jogja",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "4-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "5-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "3-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.596471028954742,
//                     "pitch": 0.22017825424178739,
//                     "title": "Sroto Sokaraja",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "5-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "6-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "4-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.480222130534946,
//                     "pitch": 0.1714353601293439,
//                     "title": "Kopi Gurih Wangi",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "6-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "7-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "5-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.4720506505272066,
//                     "pitch": 0.33792951213133904,
//                     "title": "Es Jeruk Peras &amp; Es Lemon Import California",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "7-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "8-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "6-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.6493582361179442,
//                     "pitch": 0.2401868489650827,
//                     "title": "Kupat Tahu",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "8-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "9-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "7-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.5662543414881398,
//                     "pitch": 0.281048937902705,
//                     "title": "Es Doger &amp; Es Goyobod",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "9-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "10-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "8-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.4776663762941826,
//                     "pitch": 0.3551873727327379,
//                     "title": "Rujak Buah",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "10-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "11-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "9-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.4263498080315333,
//                     "pitch": 0.2851344502408537,
//                     "title": "Seblak",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "11-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "12-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "10-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -2.3198815867038007,
//                     "pitch": 0.1293002235525762,
//                     "title": "Krenchise Fried Chicken",
//                     "text": "Text"
//                 },
//                 {
//                     "yaw": -1.6287337126684598,
//                     "pitch": 0.2732787802765433,
//                     "title": "Telur Gulung Raos",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "12-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "13-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "11-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.5527655249752037,
//                     "pitch": 0.1813223033955591,
//                     "title": "King Pucok",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "13-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "14-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "12-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.4054485418607339,
//                     "pitch": 0.24920141851627875,
//                     "title": "Singkong Keju Pratama",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "14-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "15-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "13-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -2.0407139905487295,
//                     "pitch": 0.28951727276679406,
//                     "title": "Baso Tusuk Bimangkit",
//                     "text": "Text"
//                 },
//                 {
//                     "yaw": -1.463305430068024,
//                     "pitch": 0.23851142894384125,
//                     "title": "Aci Cirambay",
//                     "text": "Text"
//                 },
//                 {
//                     "yaw": -0.9497053260389166,
//                     "pitch": 0.2948436049557088,
//                     "title": "Lumpia Basah Kojo",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "15-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "16-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "14-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.6135570948115188,
//                     "pitch": 0.24070145481758587,
//                     "title": "Kelapa Muda Rojali",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "16-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "17-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "15-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.6175082350157748,
//                     "pitch": 0.17514289179886333,
//                     "title": "Sedotan",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "17-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "18-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "16-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.5371887293097188,
//                     "pitch": 0.28540066980359846,
//                     "title": "Es Pisang Ijo Priangan",
//                     "text": "Text"
//                 },
//                 {
//                     "yaw": -0.8205841446203337,
//                     "pitch": 0.2765159740806915,
//                     "title": "Mie Lidi",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "18-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "19-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "17-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.4498030085014086,
//                     "pitch": 0.1927581694348941,
//                     "title": "Cimol Bojot",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "19-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "20-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "18-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.5336964815877838,
//                     "pitch": 0.26677212221141033,
//                     "title": "Kuch2 HOTahu",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "20-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "21-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "19-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.9417184508897751,
//                     "pitch": 0.2760591975944209,
//                     "title": "Cilor Panghegar",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "21-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "22-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "20-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.7081886592518778,
//                     "pitch": 0.3333515393565616,
//                     "title": "Makaroni &amp; Cilung",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "22-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "23-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "21-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.4054310122865203,
//                     "pitch": 0.28162207591757493,
//                     "title": "Cilung",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "23-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "24-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "22-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.5528047633734197,
//                     "pitch": 0.19281567338420125,
//                     "title": "Kim's Topokki",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "24-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "25-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "23-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.4663648186948564,
//                     "pitch": 0.34910526242873985,
//                     "title": "Martabak Mini",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "25-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "26-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "24-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.5009428710446926,
//                     "pitch": 0.5168667033611172,
//                     "title": "Pempek Palembang Lugina",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "26-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "27-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "25-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.3719580961135946,
//                     "pitch": 0.4015114980158945,
//                     "title": "X-tra Potato",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "27-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "28-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "26-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.5203786898547769,
//                     "pitch": 0.2049427841585718,
//                     "title": "Say Stay",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "28-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "29-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "27-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.6556430357744283,
//                     "pitch": 0.2890523123065929,
//                     "title": "Cappucino Cincau",
//                     "text": "Text"
//                 },
//                 {
//                     "yaw": -1.1905608304601252,
//                     "pitch": 0.22328340252439816,
//                     "title": "Ji Jeruk",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "29-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "30-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "28-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.6350895061041317,
//                     "pitch": 0.2865040510622663,
//                     "title": "Telor Cilor Bihun Gulung",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "30-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "31-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "29-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.2450030757720647,
//                     "pitch": 0.28874463061410793,
//                     "title": "Aneka Pop Ice",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "31-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "32-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "30-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.5526534642964087,
//                     "pitch": 0.31623239302007455,
//                     "title": "Sate Usus",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "32-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "33-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "31-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.6608399732811243,
//                     "pitch": 0.2790554651105275,
//                     "title": "Bola Obi",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "33-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "34-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "32-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.5239067038229521,
//                     "pitch": 0.2647700229601444,
//                     "title": "Chic Lin",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "34-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "35-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "33-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.6822246494334774,
//                     "pitch": 0.17399644779139578,
//                     "title": "Tekumu",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "35-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "36-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "34-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.5317654397252465,
//                     "pitch": 0.31347039454005277,
//                     "title": "KPBS Pangalengan",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "36-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "37-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "35-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.7092262453891323,
//                     "pitch": 0.32166094379461896,
//                     "title": "Kuotie Ayam Super",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "37-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "38-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "36-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.8485292483923352,
//                     "pitch": 0.3225141981199666,
//                     "title": "Es Pisang Ijo Barokah",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "38-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "39-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "37-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.4809505209057026,
//                     "pitch": 0.30333114196340105,
//                     "title": "Pempek Kafy",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "39-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "40-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "38-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.452485003322467,
//                     "pitch": 0.3284186699955818,
//                     "title": "Telor Gulung",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "40-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "41-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "39-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.5119251244554466,
//                     "pitch": 0.2777092430969308,
//                     "title": "Aneka Jus",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "41-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": 0,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "42-scene"
//                 },
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "40-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.2601132032080393,
//                     "pitch": 0.3220855148221933,
//                     "title": "Pentol Patrol",
//                     "text": "Text"
//                 }
//             ]
//         },
//         {
//             "id": "42-scene",
//             "name": "scene",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 2048
//                 }
//             ],
//             "faceSize": 1344,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     "yaw": -3.14,
//                     "pitch": 0,
//                     "rotation": 0,
//                     "target": "41-scene"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     "yaw": -1.6212704605094839,
//                     "pitch": 0.21182197681935833,
//                     "title": "Aneka Buah",
//                     "text": "Text"
//                 }
//             ]
//         }
//     ],
//     "name": "Project Title",
//     "settings": {
//         "mouseViewMode": "drag",
//         "autorotateEnabled": false,
//         "fullscreenButton": false,
//         "viewControlButtons": false
//     }
// };

// var APP_DATA = {
//     "scenes": [
//         {
//             "id": "0-default",
//             "name": "default",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 }
//             ],
//             "faceSize": 1000,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": -1,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     yaw: 0.5,
//                     pitch: 0.5,
//                     rotation: 0,
//                     target: "1-default2"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     yaw: 1,
//                     pitch: 0,
//                     title: "Xtra Potato",
//                     text: "We sell french fries in the shape of a tornado",
//                     stall: {
//                         id: "92af4166-9225-41d5-a961-7c2da4bb98ad",
//                         name: "Xtra Potato",
//                         description: "We sell french fries in the shape of a tornado",
//                         yaw: "1",
//                         pitch: "0",
//                         scene_id: "1",
//                         rating: "4"
//                     }
//                 }
//             ]
//         },
//         {
//             "id": "1-default2",
//             "name": "default2",
//             "levels": [
//                 {
//                     "tileSize": 256,
//                     "size": 256,
//                     "fallbackOnly": true
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 512
//                 },
//                 {
//                     "tileSize": 512,
//                     "size": 1024
//                 }
//             ],
//             "faceSize": 1000,
//             "initialViewParameters": {
//                 "pitch": 0,
//                 "yaw": 0,
//                 "fov": 1.5707963267948966
//             },
//             "linkHotspots": [
//                 {
//                     yaw: 3,
//                     pitch: 0.5,
//                     rotation: 0,
//                     target: "0-default"
//                 }
//             ],
//             "infoHotspots": [
//                 {
//                     yaw: 2,
//                     pitch: 0,
//                     title: "Kuch Kuch Hotahu",
//                     text: "We sell fried potato and tofu topped with special sauce",
//                     stall: {
//                         id: "3763faee-c2f9-45be-8490-3ff36ebe4eb0",
//                         name: "Kuch Kuch Hotahu",
//                         description: "We sell fried potato and tofu topped with special sauce",
//                         yaw: "2",
//                         pitch: "0",
//                         scene_id: "1",
//                         rating: "4"
//                     }
//                 }
//             ]
//         }
//     ],
//     "name": "Gazmin Streetfood",
//     "settings": {
//         "mouseViewMode": "drag",
//         "autorotateEnabled": false,
//         "fullscreenButton": true,
//         "viewControlButtons": true
//     }
// };
