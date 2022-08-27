const getAllStall = require("../services/getAllStall")
const getStallById = require("../services/getStallById")

const getStall = async (req, res) => {

    // If no query parameter at all
    const response = await getAllStall()

    res.status(200).send(response)
}

const getStallUsingStallId = async (req, res) => {

    const { id } = req.params

    const response = await getStallById(id)

    res.status(200).send(response)
}

module.exports = {
    getStall,
    getStallUsingStallId
}