const { hashPassword } = require("../loaders/bcrypt")
const { searchUser, createUser } = require("../models/user")

module.exports = async (username, password, name, address) => {
    const isAvailable = await searchUser(username)

    if (isAvailable[0] != 0) return {
        code: 1,
        message: "Username is already available, please use another username"
    }

    let newPassword = await hashPassword(password)

    await createUser(username, newPassword, name, address)

    return {
        code: 0,
        message: "Username Created"
    }
}