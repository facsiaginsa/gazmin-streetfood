const app = require("../loaders/fastify")

const getAllStall = async () => {
    const response = await app.axios.get("/stall")
    return response.data
}

module.exports = {
    getAllStall
}