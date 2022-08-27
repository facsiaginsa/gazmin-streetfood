const { jsonParse } = require("../loaders/fast-json")
const { setCart, deleteCart, addItemInCart, getCart } = require("../models/cart")
const { selectStallById } = require("../models/stall")
const { searchAllProduct } = require("../models/product")
const productIdToObject = require("./productIdToObject")
const formatConvert = require("./formatConvert")

module.exports = async (user_id, product_id, stall_id, amount = 1) => {
    let current = jsonParse(await getCart(user_id))?.value?.stall
    let code, message

    if (!current) {
        await setCart(user_id, product_id, stall_id, amount)
        code =  1
        message = "Add product Success! New cart on stall:" + stall_id
    }

    if (current && current != stall_id) {
        await deleteCart(user_id)
        await setCart(user_id, product_id, stall_id, amount)
        code = 2
        message = "Add product Success! Change cart from stall:" + current + " to stall:" + stall_id
    }

    if (current && current == stall_id) {
        await addItemInCart(user_id, product_id, amount)
        code = 0
        message = "Add product on existing cart success"
    }

    let [stall, stringCart, products] = await Promise.all([selectStallById(stall_id), getCart(user_id), searchAllProduct()])

    // modified stall value
    let cart = jsonParse(stringCart).value
    stall.id = cart.stall
    cart.stall = stall

    // modified products value
    let formattedProduct = await formatConvert(products)
    let modifiedProduct = cart.products.map(productIdToObject, formattedProduct)
    cart.products = modifiedProduct
    
    return { code, message, cart }
}