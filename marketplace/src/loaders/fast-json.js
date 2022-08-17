const jsonStringify = require('fast-json-stringify')
const jsonParse = require('fast-json-parse')

const jsonStringifyCart = jsonStringify({
    title: "Set Cart",
    type: "object",
    properties: {
        stall: {
            type: "string"
        },
        status: {
            type: "integer"
        },
        products: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    product_id: {
                        type: "string"
                    },
                    amount: {
                        type: "integer"
                    }
                }
            }
        }
    }
})

const jsonStringifyItem = jsonStringify({
    title: "Add Item in Cart",
    properties: {
        product_id: {
            type: "string"
        },
        amount: {
            type: "integer"
        }
    }
})

module.exports = { jsonStringifyItem, jsonStringifyCart, jsonParse }