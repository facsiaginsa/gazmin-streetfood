function findStall(stall) {
    return stall.id == this
}

module.exports = function stallIdtoObject(item) {
    let newItem = item

    newItem.stall = this.data.find(findStall, item.stall)

    return newItem
}