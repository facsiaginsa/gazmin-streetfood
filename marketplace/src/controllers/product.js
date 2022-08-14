const getAllProduct = require("../services/getAllProduct")
const getProductByName = require("../services/getProductByName")

const getProduct = async (req, res) => {

    if (req.query?.name) {
        const response = await getProductByName(req.query.name)
        res.status(200).send(response)
        return
    }

    // If no query parameter at all
    const response = await getAllProduct()

    res.status(200).send(response)
}

module.exports = {
    getProduct
}