const { jsonParse } = require("../loaders/fast-json")
const { getStreetviewData } = require("../models/streetview")

module.exports = async () => {
    let response = {}
    let data = jsonParse(await getStreetviewData()).value

    if (!data) {
        response.code = 1
        response.message = "No Streetview Data Available"
    }

    if (data) {
        response.code = 0
        response.message = "Get streetview data success"
        response.marzipano = data
    }
    
    return response
}