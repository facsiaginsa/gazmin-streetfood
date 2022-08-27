var MARKETPLACE_URL = "https://gazmin-marketplace.facsiaginsa.com";
var STREETVIEW_URL = "https://gazmin-streetview.facsiaginsa.com";
var APP_DATA = {
    "scenes": [
        {
            "id": "0-default",
            "name": "default",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                }
            ],
            "faceSize": 1000,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": -1,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    yaw: 0.5,
                    pitch: 0.5,
                    rotation: 0,
                    target: "1-default2"
                }
            ],
            "infoHotspots": [
                {
                    yaw: 1,
                    pitch: 0,
                    title: "Xtra Potato",
                    text: "We sell french fries in the shape of a tornado",
                    stall: {
                        id: "92af4166-9225-41d5-a961-7c2da4bb98ad",
                        name: "Xtra Potato",
                        description: "We sell french fries in the shape of a tornado",
                        yaw: "1",
                        pitch: "0",
                        scene_id: "1",
                        rating: "4"
                    }
                }
            ]
        },
        {
            "id": "1-default2",
            "name": "default2",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                }
            ],
            "faceSize": 1000,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    yaw: 3,
                    pitch: 0.5,
                    rotation: 0,
                    target: "0-default"
                }
            ],
            "infoHotspots": [
                {
                    yaw: 2,
                    pitch: 0,
                    title: "Kuch Kuch Hotahu",
                    text: "We sell fried potato and tofu topped with special sauce",
                    stall: {
                        id: "3763faee-c2f9-45be-8490-3ff36ebe4eb0",
                        name: "Kuch Kuch Hotahu",
                        description: "We sell fried potato and tofu topped with special sauce",
                        yaw: "2",
                        pitch: "0",
                        scene_id: "1",
                        rating: "4"
                    }
                }
            ]
        }
    ],
    "name": "Gazmin Streetfood",
    "settings": {
        "mouseViewMode": "drag",
        "autorotateEnabled": false,
        "fullscreenButton": true,
        "viewControlButtons": true
    }
};
