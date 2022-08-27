const { jsonParse } = require("../loaders/fast-json")
const { deleteItemInCart, getCart } = require("../models/cart")
const { searchAllProduct } = require("../models/product")
const { selectStallById } = require("../models/stall")
const formatConvert = require("./formatConvert")
const productIdToObject = require("./productIdToObject")

module.exports = async (user_id, product_id) => {
    await deleteItemInCart(user_id, product_id)
    // let cart = jsonParse(await getCart(user_id)).value

    let [stringCart, products] = await Promise.all([getCart(user_id), searchAllProduct()])
    let cart = jsonParse(stringCart).value

    let stall = await selectStallById(cart.stall)

    // modified stall value
    stall.id = cart.stall
    cart.stall = stall

    // modified products value
    let formattedProduct = await formatConvert(products)

    let modifiedProduct = cart.products.map(productIdToObject, formattedProduct)
    cart.products = modifiedProduct

    return {
        code: 0,
        message: "Delete Item in Cart success",
        cart
    }
}