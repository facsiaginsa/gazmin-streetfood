const app = require('fastify')({
    logger: true,
    disableRequestLogging: true
})

app.register(require('@fastify/cors'), {
    origin: "*"
})

module.exports = app