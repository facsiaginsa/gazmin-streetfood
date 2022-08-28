// dependencies
const userAuth = require("./middleware/authorization")
const { port, host } = require("./config")
const healthCheck = require("./controllers/healthCheck")
const { getAppData, setAppData, updateData } = require("./controllers/streetview")
const app = require("./loaders/fastify")

// health-check
app.get("/health-check", healthCheck)

// app config
app.get("/app/data", getAppData)
app.post("/app/data", { preValidation: userAuth }, setAppData)
app.put("/app/data", { preValidation: userAuth }, updateData)

app.listen({port, host})