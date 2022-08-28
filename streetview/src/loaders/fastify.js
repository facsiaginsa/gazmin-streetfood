const { db, jwtConfig, marketplaceURL } = require('../config')

const app = require('fastify')({
    logger: true,
    disableRequestLogging: true
})

app.register(require('@fastify/cors'), {
    origin: "*"
})

app.register(require('@fastify/jwt'), {
    secret: jwtConfig.secret
})

app.register(require('@fastify/redis'), { 
    host: db.host,
    username: db.user, 
    password: db.pass,
    port: db.port,
    enableReadyCheck: false
})

app.register(require('fastify-axios'), {
    baseURL: marketplaceURL
})

module.exports = app