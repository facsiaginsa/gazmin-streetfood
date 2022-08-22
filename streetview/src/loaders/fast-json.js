const jsonStringify = require('fast-json-stringify')
const jsonParse = require('fast-json-parse')

const jsonStringifyStreetview = jsonStringify({
    title: "Streetview",
    type: "object",
    properties: {
        scenes: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    id: {
                        type: "string"
                    },
                    name: {
                        type: "string"
                    },
                    levels: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                tileSize: {
                                    type: "integer"
                                },
                                size: {
                                    type: "integer"
                                },
                                fallbackOnly: {
                                    type: "boolean"
                                }
                            }
                        }
                    },
                    faceSize: {
                        type: "integer"
                    },
                    initialViewParameters: {
                        type: "object",
                        properties: {
                            yaw: {
                                type: "number"
                            },
                            pitch: {
                                type: "number"
                            },
                            fov: {
                                type: "number"
                            }
                        }
                    },
                    linkHotspots: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                yaw: {
                                    type: "number"
                                },
                                pitch: {
                                    type: "number"
                                },
                                rotation: {
                                    type: "number"
                                },
                                target: {
                                    type: "string"
                                }
                            }
                        }
                    },
                    infoHotspots: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                yaw: {
                                    type: "number"
                                },
                                pitch: {
                                    type: "number"
                                },
                                title: {
                                    type: "string"
                                },
                                text: {
                                    type: "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        name: {
            type: "string"
        },
        settings: {
            type: "object",
            properties: {
                mouseViewMode: {
                    type: "string"
                },
                autorotateEnabled: {
                    type: "boolean"
                },
                fullscreenButton: {
                    type: "boolean"
                },
                viewControlButtons: {
                    type: "boolean"
                }
            }
        }
    }
})

module.exports = { jsonStringifyStreetview, jsonParse }