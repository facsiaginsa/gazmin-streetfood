const { searchAllProduct } = require("../models/product")
const formatConvert = require("./formatConvert")

module.exports = async () => {
    const products =  await searchAllProduct()
    const formattedProduct = await formatConvert(products)

    // Add message & code on response body
    formattedProduct.message = "Get all product success"
    formattedProduct.code = 0
    
    return formattedProduct
}