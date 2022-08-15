const getAllProduct = require("../services/getAllProduct")
const getProductById = require("../services/getProductById")
const getProductByName = require("../services/getProductByName")

const getProduct = async (req, res) => {

    const { name } = req.query

    if (name) {
        const response = await getProductByName(name)
        res.status(200).send(response)
        return
    }

    // If no query parameter at all
    const response = await getAllProduct()

    res.status(200).send(response)
}

const getProductUsingProductId = async (req, res) => {

    const { id } = req.params

    console.log(id)
    const response = await getProductById(id)

    res.status(200).send(response)
}

module.exports = {
    getProduct,
    getProductUsingProductId
}