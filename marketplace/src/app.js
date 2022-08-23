// dependencies
const { port, host } = require("./config")
const healthCheck = require("./controllers/healthCheck")
const app = require("./loaders/fastify")
const { userLogin, userRegister } = require("./controllers/user")
const verifySchema = require("./services/verifySchema")
const { getProduct, getProductUsingProductId } = require("./controllers/product")
const userAuth = require("./middleware/authorization")
const { getCart, addToCart, removeFromCart, editAmount, setNotes } = require("./controllers/cart")
const { getStall, getStallUsingStallId } = require("./controllers/stall")

// health-check
app.get("/health-check", healthCheck)

// user
app.post("/user/login", userLogin)
app.post("/user/register", userRegister)

// Product
app.get("/product", getProduct)
app.get("/product/:id", getProductUsingProductId)

// Stall
app.get("/stall", getStall)
app.get("/stall/:id", getStallUsingStallId)

// Rating

// Cart
app.post("/cart/add/:product_id", { preValidation: userAuth }, addToCart)
app.put("/cart/notes", { preValidation: userAuth }, setNotes)
app.delete("/cart/:product_id", { preValidation: userAuth }, removeFromCart)
app.put("/cart/:amount_type/:product_id", { preValidation: userAuth }, editAmount)
app.get("/cart", { preValidation: userAuth }, getCart)

// Payment

app.listen({port, host}, async () => {
    const isReady = await verifySchema()
    app.log.info(isReady)
})