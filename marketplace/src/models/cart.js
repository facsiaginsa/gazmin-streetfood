const { jsonStringifyCart, jsonStringifyItem } = require("../loaders/fast-json")
const app = require("../loaders/fastify")

const getCart = async (user_id) => {
    return await app.redis.call(
        "JSON.GET", 
        "cart:" + user_id
    )
}

const setCart = async (user_id, product_id, stall_id, amount) => {
    let payload = jsonStringifyCart({
        stall: stall_id,
        status: 0,
        notes: "",
        products: [{
            product_id,
            amount
        }]
    })

    return await app.redis.call(
        "JSON.SET",
        "cart:" + user_id,
        "$",
        payload
    )
}

const addItemInCart = async (user_id, product_id, amount) => {
    let payload = jsonStringifyItem({
        product_id,
        amount
    })

    console.log(payload)

    return await app.redis.call(
        "JSON.ARRAPPEND", 
        "cart:" + user_id, 
        "$.products", 
        payload
    )
}

const deleteItemInCart = async (user_id, product_id) => {
    return await app.redis.call(
        "JSON.DEL", 
        "cart:" + user_id, 
        '$.products[?(@.product_id=="'+ product_id +'")]'
    )
}

const setItemAmount = async (user_id, product_id, amount) => {

    return await app.redis.call(
        "JSON.NUMINCRBY", 
        "cart:" + user_id,
        '$.products[?(@.product_id=="'+ product_id +'")].amount',
        amount
    )
}

const deleteCart = async (user_id) => {
    return await app.redis.call(
        "JSON.DEL", 
        "cart:"+ user_id
    )
}

const setNotes = async (user_id, notes) => {
    return await app.redis.call(
        "JSON.SET",
        "cart:"+ user_id,
        "$.notes",
        '"'+ notes +'"'
    )
}

module.exports = {
    setCart,
    addItemInCart,
    deleteItemInCart,
    setItemAmount,
    deleteCart,
    getCart,
    setNotes
}