const login = require("../services/login")
const register = require("../services/register")

const userLogin = async (req,res) => {
    const { username, password } = req.body

    const response = await login(username, password)

    res.status(200).send(response)
}

const userRegister = async (req,res) => {
    const { username, password, name, address } = req.body

    const response = await register(username, password, name, address)

    res.status(200).send(response)
}

module.exports = {
    userLogin,
    userRegister
}