require("dotenv").config()

module.exports = {
    host: process.env.IPBIND || "0.0.0.0",
    port: process.env.PORT || 4000
}