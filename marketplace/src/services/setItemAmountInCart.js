const { jsonParse } = require("../loaders/fast-json")
const { setItemAmount, getCart } = require("../models/cart")

module.exports = async (user_id, product_id, amount = 1) => {
    await setItemAmount(user_id, product_id, amount)

    let text = (amount >= 0) ? "increase" : "decrease"

    let cart = jsonParse(await getCart(user_id)).value
    return {
        code: 0,
        message: "Successfully "+ text +" amount of Item:" + product_id + " by " + amount,
        cart
    }
}