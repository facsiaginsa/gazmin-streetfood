require("dotenv").config()

module.exports = {
    host: process.env.IPBIND || "0.0.0.0",
    port: parseInt(process.env.PORT) || 3000,
    db: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        user: process.env.REDIS_USER,
        pass: process.env.REDIS_PASS,
        schema: {
            user: process.env.USER_SCHEMA || "user_idx",
            product: process.env.PRODUCT_SCHEMA || "product_idx",
            stall: process.env.STALL_SCHEMA || "stall_idx",
            rating: process.env.RATING_SCHEMA || "rating_idx"
        }
    },
    jwtConfig: {
        secret: process.env.JWT_SECRET
    },
    bcryptConfig: {
        saltRounds: parseInt(process.env.BCRYPT_SALT) || 10
    },
}