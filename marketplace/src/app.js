// dependencies
const { port, host } = require("./config")
const healthCheck = require("./controllers/healthCheck")
const app = require("./loaders/fastify")
const { userLogin, userRegister } = require("./controllers/user")
const verifySchema = require("./services/verifySchema")

// health-check
app.get("/health-check", healthCheck)

// user
app.post("/user/login", userLogin)
app.post("/user/register", userRegister)

// Product

// Checkout

// Payment

app.listen({port, host}, async () => {
    const isReady = await verifySchema()
    app.log.info(isReady)
})