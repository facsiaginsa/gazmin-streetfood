const { jsonParse } = require("../loaders/fast-json");
const { getAllStall } = require("../models/marketplace");
const { getStreetviewData, saveStreetviewData } = require("../models/streetview");
const appendStallToAppData = require("./appendStallToAppData");

module.exports = async () => {
    let response = {}

    let [stringData, stall] = await Promise.all([getStreetviewData(), getAllStall()])

    let jsondata = jsonParse(stringData).value

    let newJsonData = appendStallToAppData(jsondata, stall)
    // jsondata.scenes.map(appendStallToAppData, stall)

    // console.log(newJsonData.scenes[11].infoHotspots)
    let data = await saveStreetviewData(newJsonData)

    response.code = 0
    response.message = "Update streetview data success"
    response.marzipano = jsondata

    return response
}