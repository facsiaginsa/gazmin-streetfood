const { searchAllStall } = require("../models/stall")
const formatConvert = require("./formatConvert")

module.exports = async () => {
    let stalls = await searchAllStall()
    let formattedStall = await formatConvert(stalls)

    formattedStall.code = 0
    formattedStall.message = "Get all stall success"

    return formattedStall
}