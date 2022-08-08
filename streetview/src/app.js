// dependencies
const { port, host } = require("./config")
const healthCheck = require("./controllers/healthCheck")
const app = require("./loaders/fastify")

// health-check
app.get("/health-check", healthCheck)

app.listen({port, host})