const addProducttoCart = require("../services/addProducttoCart")
const getExistingCart = require("../services/getExistingCart")
const removeProductOnCart = require("../services/removeProductOnCart")
const setItemAmountInCart = require("../services/setItemAmountInCart")

const addToCart = async (req, res) => {
    const { stall_id, amount } = req.body
    const { product_id } = req.params
    const user_id = req.token.user_id

    const response = await addProducttoCart(user_id, product_id, stall_id, amount)

    res.status(200).send(response)

}

const removeFromCart = async(req,res) => {
    const { product_id } = req.params
    const user_id = req.token.user_id

    const response = await removeProductOnCart(user_id, product_id)

    res.status(200).send(response)
}

const editAmount = async (req,res) => {
    let amount = req.body?.amount || 1
    const { amount_type, product_id } = req.params
    const user_id = req.token.user_id

    amount = (amount_type === "incr") ? amount : amount * -1

    const response = await setItemAmountInCart(user_id, product_id, amount)

    res.status(200).send(response)
}

const getCart = async (req,res) => {
    const user_id = req.token.user_id
    const response = await getExistingCart(user_id)
    res.status(200).send(response)
}

module.exports = {
    addToCart,
    removeFromCart,
    editAmount,
    getCart
}