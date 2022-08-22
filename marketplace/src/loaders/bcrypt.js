const bcrypt = require('bcrypt');
const { bcryptConfig } = require('../config');

const hashPassword = async (plainPassword) => {
    return await bcrypt.hash(plainPassword, bcryptConfig.saltRounds)
}

const comparePassword = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword)
}

module.exports = { hashPassword, comparePassword }