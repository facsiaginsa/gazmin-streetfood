function findStall(element){
    return element.scene_id == this
}

module.exports = function appendStallToAppData(scene) {

    let newScene = scene
    newScene.infoHotspots = []

    let id = scene.id.split("-")[0]

    let stall = this.data.find(findStall, id)

    if (stall) {
        newScene.infoHotspots.push({
            yaw: parseFloat(stall.yaw),
            pitch: parseFloat(stall.pitch),
            title: stall.name,
            text: stall.description,
            stall
        })
    }
    
    return newScene
}