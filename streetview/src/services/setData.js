const { saveStreetviewData } = require("../models/streetview")

module.exports = async (jsondata) => {
    let response = {}
    let data = await saveStreetviewData(jsondata)

    response.code = 0
    response.message = "Save streetview data success"
    response.marzipano = data
    
    return response
}