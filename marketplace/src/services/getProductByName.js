const { searchProductByName } = require("../models/product")
const formatConvert = require("./formatConvert")

module.exports = async (name) => {
    const products = await searchProductByName(name)
    const formattedProduct = await formatConvert(products)

    if (products[0] >= 1) {
        formattedProduct.message = "Get product by name success"
        formattedProduct.code = 0
    }
    
    if (products[0] == 0) {
        formattedProduct.message = "No product match with the name"
        formattedProduct.code = 1
    }

    return formattedProduct
}