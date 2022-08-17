// dependencies
const { port, host } = require("./config")
const healthCheck = require("./controllers/healthCheck")
const app = require("./loaders/fastify")
const { userLogin, userRegister } = require("./controllers/user")
const verifySchema = require("./services/verifySchema")
const { getProduct, getProductUsingProductId } = require("./controllers/product")
const userAuth = require("./middleware/authorization")
const { getCart, addToCart, removeFromCart, editAmount } = require("./controllers/cart")

// health-check
app.get("/health-check", healthCheck)

// user
app.post("/user/login", userLogin)
app.post("/user/register", userRegister)

// Product
app.get("/product", getProduct)
app.get("/product/:id", getProductUsingProductId)

// Rating

// Cart
app.post("/cart/add/:product_id", { preValidation: userAuth }, addToCart)
app.delete("/cart/remove/:product_id", { preValidation: userAuth }, removeFromCart)
app.put("/cart/amount/:product_id", { preValidation: userAuth }, editAmount)
app.get("/cart", { preValidation: userAuth }, getCart)

// Payment

app.listen({port, host}, async () => {
    const isReady = await verifySchema()
    app.log.info(isReady)
})