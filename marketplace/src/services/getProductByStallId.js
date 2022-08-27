const { searchProductByStallId } = require("../models/product")
const formatConvert = require("./formatConvert")

module.exports = async (id) => {
    const products = await searchProductByStallId(id)
    const formattedProduct = await formatConvert(products)

    if (products[0] >= 1) {
        formattedProduct.message = "Get product by stall id success"
        formattedProduct.code = 0
    }
    
    if (products[0] == 0) {
        formattedProduct.message = "This stall does not have products"
        formattedProduct.code = 1
    }

    return formattedProduct
}