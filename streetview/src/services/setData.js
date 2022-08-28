const { getAllStall } = require("../models/marketplace")
const { saveStreetviewData } = require("../models/streetview")
const appendStallToAppData = require("./appendStallToAppData")

module.exports = async (jsondata) => {
    let response = {}
    let stall = await getAllStall()

    jsondata.scenes.map(appendStallToAppData, stall)

    let data = await saveStreetviewData(jsondata)

    response.code = 0
    response.message = "Save streetview data success"
    response.marzipano = data
    
    return response
}