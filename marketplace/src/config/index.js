require("dotenv").config()

module.exports = {
    host: process.env.IPBIND || "0.0.0.0",
    port: parseInt(process.env.PORT) || 4000,
    db: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        user: process.env.REDIS_USER,
        pass: process.env.REDIS_PASS
    },
    jwtConfig: {
        secret: process.env.JWT_SECRET
    },
    bcryptConfig: {
        saltRounds: parseInt(process.env.BCRYPT_SALT) || 10
    }
}