const { searchAllProduct } = require("../models/product")
const formatConvert = require("./formatConvert")

module.exports = async () => {
    let products =  await searchAllProduct()
    let formattedProduct = await formatConvert(products)

    // Add message & code on response body
    formattedProduct.message = "Get all product success"
    formattedProduct.code = 0
    
    return formattedProduct
}