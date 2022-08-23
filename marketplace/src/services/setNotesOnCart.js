const { jsonParse } = require("../loaders/fast-json")
const { setNotes, getCart } = require("../models/cart")

module.exports = async (user_id, notes) => {
    await setNotes(user_id,notes)

    let cart = jsonParse(await getCart(user_id)).value
    return {
        code: 0,
        message: "Successfully set notes to the cart",
        cart
    }
}