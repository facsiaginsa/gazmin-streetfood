const { db } = require("../config")
const app = require("../loaders/fastify")
const generateID = require("../loaders/uuid")

const searchUserPassword = async (username, password) => {
    let parse_username = username.split("@")
    return await app.redis.call("FT.SEARCH", db.schema.user, '@user:"'+ parse_username[0] + '" @mail:"' + parse_username[1] +'" @password:"'+ password+'"')
}

const searchUser = async (username) => {
    let parse_username = username.split("@")
    return await app.redis.call("FT.SEARCH", db.schema.user, '@user:"'+ parse_username[0] + '" @mail:"' + parse_username[1] + '"')
}

const createUser = async (username, password, name, address) => {
    let parse_username = username.split("@")
    let user = parse_username[0]
    let mail = parse_username[1]
    try {
        return await app.redis.hmset("user:" + generateID(), { user, mail, password, name, address } )
    } catch (error) {
        app.log.error(error)
    }
}

module.exports = { searchUserPassword, searchUser, createUser }