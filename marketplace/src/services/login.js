const { comparePassword } = require("../loaders/bcrypt")
const app = require("../loaders/fastify")
const { searchUser } = require("../models/user")

module.exports = async (username, password) => {
    const user = await searchUser(username)
    if (user[0] === 0) {
        return {
            code: 2,
            message: "Wrong e-mail/password!"
        }
    }

    let isCorrect = await comparePassword(password, user[2][5])

    if (!isCorrect) {
        return {
            code: 1,
            message: "Wrong e-mail/password!"
        }
    }

    let userData = {
        username: user[2][1] + "@" + user[2][3],
        name: user[2][7],
        user_id: user[1].split(":")[1],
        address: user[2][9],
    }

    let token = app.jwt.sign(userData)
    userData.token = token

    return {
        code: 0,
        message: "Login success!",
        userData
    }
}