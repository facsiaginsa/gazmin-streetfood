function findProduct(product) {
    return product.id == this
}

module.exports = function productIdtoObject(item) {
    
    product = this.data.find(findProduct, item.product_id)
    product.amount = item.amount

    return product
}