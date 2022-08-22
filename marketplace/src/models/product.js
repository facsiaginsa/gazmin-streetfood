const { db } = require("../config")
const app = require("../loaders/fastify")

const searchAllProduct = async () => {
    try {
        return await app.redis.call("FT.SEARCH", db.schema.product, "*")
    } catch (error) {
        app.log.error(error)        
    }
}

const searchProductByName = async (name) => {
    try {
        return await app.redis.call("FT.SEARCH", db.schema.product, "@name:" + name + "*")
    } catch (error) {
        app.log.error(error)  
    }
}

const searchProductByQuery = async (query) => {
    try {
        return await app.redis.call("FT.SEARCH", db.schema.product, query)
    } catch (error) {
        app.log.error(error)
    }
}

const selectProductById = async (id) => {
    try {
        return await app.redis.hgetall("product:" + id)
    } catch (error) {
        app.log.error(error)
    }
}

module.exports = { 
    searchAllProduct, 
    searchProductByName,
    selectProductById,
    searchProductByQuery
}