const { jsonParse } = require("../loaders/fast-json")
const { deleteItemInCart, getCart } = require("../models/cart")

module.exports = async (user_id, product_id) => {
    await deleteItemInCart(user_id, product_id)
    let cart = jsonParse(await getCart(user_id)).value
    return {
        code: 0,
        message: "Delete Item in Cart success",
        cart
    }
}