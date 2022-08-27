// dependencies
const userAuth = require("./middleware/authorization")
const { port, host } = require("./config")
const healthCheck = require("./controllers/healthCheck")
const { getAppData, setAppData } = require("./controllers/streetview")
const app = require("./loaders/fastify")

// health-check
app.get("/health-check", healthCheck)

// app config
app.get("/app/data", getAppData)
app.post("/app/data", { preValidation: userAuth }, setAppData)

app.listen({port, host})