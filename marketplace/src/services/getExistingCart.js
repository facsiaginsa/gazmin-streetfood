const { getCart } = require("../models/cart")

module.exports = async (user_id) => {
    // let code, message
    
    let cart =  await getCart(user_id)

    if (!cart) {
        return {
            code: 1,
            message: "cart is empty"
        }
    }

    return {
        code: 0,
        message: "get cart success",
        cart
    }
}