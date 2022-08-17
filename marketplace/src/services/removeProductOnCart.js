const { deleteItemInCart, getCart } = require("../models/cart")

module.exports = async (user_id, product_id) => {
    await deleteItemInCart(user_id, product_id)
    let cart = await getCart(user_id)
    return {
        code: 0,
        message: "Delete Item in Cart success",
        cart
    }
}