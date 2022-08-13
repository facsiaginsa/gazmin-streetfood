const { hashPassword } = require("../loaders/bcrypt")
const { searchUser, createUser } = require("../models/user")

module.exports = async (username, password, name, address) => {
    const isAvailable = searchUser(username)

    if (isAvailable[0] === 1) return {
        code: 1,
        message: "Username is already available, please use another username"
    }

    let newPassword = await hashPassword(password)

    let isUserCreated = await createUser(username, newPassword, name, address)

    return {
        code: 0,
        message: "Username Created"
    }
}