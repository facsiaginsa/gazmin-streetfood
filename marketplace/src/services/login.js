const { comparePassword } = require("../loaders/bcrypt")
const app = require("../loaders/fastify")
const { searchUserPassword, searchUser } = require("../models/user")

module.exports = async (username, password) => {
    const user = await searchUser(username)
    if (user[0] === 0) {
        return {
            code: 2,
            message: "Your username is not available"
        }
    }

    let isCorrect = await comparePassword(password, user[2][5])

    if (!isCorrect) {
        return {
            code: 1,
            message: "Your username/password is not match"
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
    
    $('#nav-user').removeClass('loggedout');
    $('#nav-user').addClass('loggedin');

    return {
        code: 0,
        message: "login success",
        userData
    }
}