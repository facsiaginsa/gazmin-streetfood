const { db } = require("../config")
const app = require("../loaders/fastify")

const schemaList = async () => {
    return await app.redis.call("FT._LIST")
}

const createUserSchema = async () => {
    return await app.redis.call(
        "FT.CREATE", 
        db.schema.user, 
        "PREFIX", "1", "user:", 
        "SCHEMA", 
        "user", "TEXT",
        "mail", "TEXT", 
        "password", "TEXT", 
        "name", "TEXT", 
        "address", "TEXT"
    )
}

const createProductSchema = async () => {
    return await app.redis.call(
        "FT.CREATE", 
        db.schema.product, 
        "PREFIX", "1", "product:", 
        "SCHEMA", 
        "name", "TEXT", 
        "description", "TEXT", 
        "price", "NUMERIC", 
        "photo", "TEXT", 
        "stock", "NUMERIC", 
        "rating", "NUMERIC", 
        "stall", "TEXT", 
        "category", "TAG"
    )
}

const createStallSchema = async () => {
    return await app.redis.call(
        "FT.CREATE", 
        db.schema.stall, 
        "PREFIX", "1", "stall:", 
        "SCHEMA", 
        "name", "TEXT", 
        "description", "TEXT", 
        "yaw", "NUMERIC", 
        "pitch", "NUMERIC", 
        "scene_id", "TEXT", 
        "rating", "NUMERIC"
    )
}

const createRatingSchema = async () => {
    return await app.redis.call(
        "FT.CREATE", 
        db.schema.rating, 
        "PREFIX", "1", "rating:", 
        "SCHEMA", 
        "reference", "TEXT", 
        "rating", "NUMERIC", 
        "comment", "TEXT", 
        "user", "TEXT"
    )
}

module.exports = { 
    schemaList, 
    createUserSchema, 
    createProductSchema, 
    createStallSchema,
    createRatingSchema
}