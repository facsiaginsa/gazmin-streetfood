require("dotenv").config()

module.exports = {
    host: process.env.IPBIND || "0.0.0.0",
    port: process.env.PORT || 3000,
    db: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        user: process.env.REDIS_USER,
        pass: process.env.REDIS_PASS,
    },
    jwtConfig: {
        secret: process.env.JWT_SECRET
    },
    marketplaceURL: process.env.MARKETPLACE_URL
}