const app = require("../loaders/fastify")

const schemaList = async () => {
    return await app.redis.call("FT._LIST")
}

const createUserSchema = async () => {
    return await app.redis.call("FT.CREATE", "user_idx", "PREFIX", "1", "user:", "SCHEMA", "username", "TEXT", "password", "TEXT", "name", "TEXT", "address", "TEXT")
}

const createProductSchema = async () => {
    return await app.redis.call("FT.CREATE", "product_idx", "PREFIX", "1", "product:", "SCHEMA", "name", "TEXT", "description", "TEXT", "price", "NUMERIC", "photo", "TEXT", "stock", "NUMERIC", "rating", "NUMERIC", "stall", "NUMERIC")
}

const createStallSchema = async () => {
    return await app.redis.call("FT.CREATE", "stall_idx", "PREFIX", "1", "stall:", "SCHEMA", "name", "TEXT", "photo", "TEXT", "description", "TEXT", "location", "TEXT", "streetview", "NUMERIC")
}

module.exports = { 
    schemaList, 
    createUserSchema, 
    createProductSchema, 
    createStallSchema 
}