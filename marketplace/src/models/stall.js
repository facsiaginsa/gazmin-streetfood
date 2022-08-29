const { db } = require("../config")
const app = require("../loaders/fastify")

const searchAllStall = async () => {
    try {
        return await app.redis.call("FT.SEARCH", db.schema.stall, "*", "LIMIT", "0", "50")
    } catch (error) {
        app.log.error(error)
    }
}

const selectStallById = async (id) => {
    try {
        return await app.redis.hgetall("stall:" + id)
    } catch (error) {
        app.log.error(error)
    }
}

module.exports = {
    searchAllStall,
    selectStallById
}