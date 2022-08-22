const { selectStallById } = require("../models/stall")

module.exports = async (id) => {
    const stall = await selectStallById(id)

    if (!stall.name) {
        stall.message = "no products match that id"
        stall.code = 1

        return stall
    }

    // formatting response
    let { yaw, pitch, scene_id, rating } = stall
    stall.id = id
    stall.yaw = parseFloat(yaw)
    stall.pitch = parseFloat(pitch)
    stall.scene_id = parseInt(scene_id)
    stall.rating = parseFloat(rating)
    stall.message = "get stall by ID success"
    stall.code = 0
    
    return stall
}