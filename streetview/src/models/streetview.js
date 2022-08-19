const { jsonStringifyStreetview } = require("../loaders/fast-json")
const app = require("../loaders/fastify")

const saveStreetviewData = async (jsondata) => {

    const data = jsonStringifyStreetview(jsondata)

    return await app.redis.call(
        "JSON.SET",
        "streetview",
        "$",
        data
    )
}

const getStreetviewData = async () => {
    return await app.redis.call(
        "JSON.GET",
        "streetview"
    )
}

module.exports = {
    saveStreetviewData,
    getStreetviewData
}