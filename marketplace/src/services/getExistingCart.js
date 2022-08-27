const { jsonParse } = require("../loaders/fast-json")
const { getCart } = require("../models/cart")
const { searchAllProduct } = require("../models/product")
const { selectStallById } = require("../models/stall")
const formatConvert = require("./formatConvert")
const productIdToObject = require("./productIdToObject")

module.exports = async (user_id) => {
    // let code, message
    let [stringCart, products] = await Promise.all([getCart(user_id), searchAllProduct()])
    let cart = jsonParse(stringCart).value

    if (!cart) {
        return {
            code: 1,
            message: "cart is empty"
        }
    }

    let stall = await selectStallById(cart.stall)
    stall.id = cart.stall
    cart.stall = stall

    // modified products value
    let formattedProduct = await formatConvert(products)
    let modifiedProduct = cart.products.map(productIdToObject, formattedProduct)
    cart.products = modifiedProduct

    return {
        code: 0,
        message: "get cart success",
        cart
    }
}