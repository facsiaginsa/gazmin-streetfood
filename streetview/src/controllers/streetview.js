const getData = require("../services/getData")
const setData = require("../services/setData")
const updateAppData = require("../services/updateAppData")

const setAppData = async (req,res) => {
    const { data } = req.body
    
    let response = await setData(data)

    res.status(200).send(response)
}

const getAppData = async (req,res) => {
    let response = await getData()

    res.status(200).send(response)
}

const updateData = async(req, res) => {
    let response = await updateAppData()

    res.status(200).send(response)
}

module.exports = {
    setAppData,
    getAppData,
    updateData
}