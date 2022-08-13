const app = require("../loaders/fastify")
const generateID = require("../loaders/uuid")

const searchUserPassword = async (username, password) => {
    return await app.redis.call("FT.SEARCH", "user_idx", "@username:"+ username +" @password:"+ password)
}

const searchUser = async (username) => {
    return await app.redis.call("FT.SEARCH", "user_idx", "@username:"+ username)
}

const createUser = async (username, password, name, address) => {
    try {
        return await app.redis.hmset("user:" + generateID(), {username, password, name, address} )
    } catch (error) {
        app.log.error(error)
    }
}

module.exports = { searchUserPassword, searchUser, createUser }