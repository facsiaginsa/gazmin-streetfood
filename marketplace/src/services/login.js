const app = require("../loaders/fastify")
const { searchUserPassword } = require("../models/user")

module.exports = async (username, password) => {
    const user = await searchUserPassword(username,password)
    if (user[0] === 0) {
        return {
            code: 1,
            message: "Your username/pass does not match, please try again"
        }
    }

    if (user[0] === 1) {
        const payload = {
            username: user[2][1],
            name: user[2][5],
            address: user[2][7],
        }

        let token = app.jwt.sign(payload)
        payload.token = token

        return {
            code: 0,
            message: "login success",
            payload
        }
    }

    return {
        code: 2,
        message: "Error Occured"
    }
}