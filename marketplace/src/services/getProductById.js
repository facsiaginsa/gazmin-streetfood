const { selectProductById } = require("../models/product")

module.exports = async (id) => {
    const product = await selectProductById(id)

    if (!product.name) {
        product.message = "no products match that id"
        product.code = 1

        return product
    }

    // formatting response
    let { rating, price, stock } = product
    product.id = id
    product.rating = parseFloat(rating)
    product.price = parseInt(price)
    product.stock = parseInt(stock)
    product.message = "get product by ID success"
    product.code = 0
    
    return product
}