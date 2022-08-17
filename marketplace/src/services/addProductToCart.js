const { setCart, deleteCart, addItemInCart, getCart } = require("../models/cart")
const currentCart = require("./currentCart")

module.exports = async (user_id, product_id, stall_id, amount = 1) => {
    let current = currentCart.get(user_id)
    let code, message

    if (!current) {
        currentCart.set(user_id, stall_id)
        await setCart(user_id, product_id, stall_id, amount)
        code =  1
        message = "Add product Success! New cart on stall:" + stall_id
    }

    if (current != stall_id) {
        await deleteCart(user_id)
        currentCart.set(user_id, stall_id)
        await setCart(user_id, product_id, stall_id, amount)
        code = 2
        message = "Add product Success! Change cart from stall:" + current + "to stall:" + stall_id
    }

    if (current == stall_id) {
        await addItemInCart(user_id, product_id, amount)
        code = 0
        message = "Add product on existing cart success"
    }

    let cart = await getCart(user_id)
    
    return { code, message, cart }
}