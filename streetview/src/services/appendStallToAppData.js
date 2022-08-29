function findStall(element){
    return element.id.split("-")[0] == this
}

function deleteDefaultStall(element){
    element.infoHotspots = []
    return element
}

module.exports = function appendStallToAppData(appData, stall) {
    let newAppData = appData

    newAppData.scenes.map(deleteDefaultStall)

    for(let i in stall.data) {
        let sceneIndex = newAppData.scenes.findIndex(findStall, stall.data[i].scene_id)

        console.log("push stall:" + stall.data[i].name + " to " + sceneIndex)

        newAppData.scenes[sceneIndex].infoHotspots.push({
            yaw: parseFloat(stall.data[i].yaw),
            pitch: parseFloat(stall.data[i].pitch),
            title: stall.data[i].name,
            text: stall.data[i].description,
            stall: stall.data[i]
        })
    }

    return newAppData
}

// module.exports = function appendStallToAppData(scene) {

//     let newScene = scene
//     newScene.infoHotspots = []

//     let id = scene.id.split("-")[0]

//     let stall = this.data.find(findStall, id)

//     if (stall) {

//         console.log("push stall:" + stall.name + " to " + id)

//         newScene.infoHotspots.push({
//             yaw: parseFloat(stall.yaw),
//             pitch: parseFloat(stall.pitch),
//             title: stall.name,
//             text: stall.description,
//             stall
//         })
//     }

//     if (!stall) {

//     }
    
//     return newScene
// }