const getData = require("../services/getData")
const setData = require("../services/setData")

const setAppData = async (req,res) => {
    const { data } = req.body

    let response = await setData(data)

    res.status(200).send(response)
}

const getAppData = async (req,res) => {
    let response = await getData()

    res.status(200).send(response)
}

module.exports = {
    setAppData,
    getAppData
}