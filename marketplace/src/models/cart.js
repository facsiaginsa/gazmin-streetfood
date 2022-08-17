const app = require("../loaders/fastify")

const getCart = async (user_id) => {
    return await app.redis.call(
                                    "JSON.GET", 
                                    "cart:" + user_id
                                )
}

const setCart = async (user_id, product_id, stall_id, amount) => {
    return await app.redis.call(
                                    "JSON.SET", 
                                    "cart:" + user_id, 
                                    "$", 
                                    '{ "stall": "'+ stall_id + '", "status": 0, "products": [{"product_id": "'+ product_id +'", "amount": '+ amount +'}] }' 
                                )
}

const addItemInCart = async (user_id, product_id, amount) => {
    return await app.redis.call(
                                    "JSON.ARRAPPEND", 
                                    "cart:" + user_id, 
                                    "$.products", 
                                    '{"product_id": "'+ product_id +'", "amount": '+ amount +'}'
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

module.exports = {
    setCart,
    addItemInCart,
    deleteItemInCart,
    setItemAmount,
    deleteCart,
    getCart
}