function findStall(stall) {
    return stall.id == this
}

module.exports = function stallIdtoObject(item) {
    let newItem = item

    console.log("item", item)
    console.log("stall data", this.data)

    newItem.stall = this.data.find(findStall, item.stall)

    return newItem
}