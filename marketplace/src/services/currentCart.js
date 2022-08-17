const app = require("../loaders/fastify")

function findStall(data) {
    return data.user_id == this
}

var cache = []

module.exports = function currentCart() {
    return {
        get: function(user_id) {
            let response = cache.find(findStall, user_id)
            return response?.stall_id
        },
        set: function(user_id,stall_id) {
            let existing_cache = this.get(user_id)

            if (!existing_cache) {
                app.log.info("cache not available, pushing new cache")
                cache.push({user_id, stall_id})
                return
            }

            if (existing_cache != stall_id) {
                app.log.info("update existing cache")
                let index = cache.findIndex(findStall, user_id)
                cache[index].stall_id = stall_id
                return
            }
        },
        delete: function(user_id) {
            let existing_cache = this.get(user_id)

            if (existing_cache != stall_id) {
                console.log("delete existing cache")
                let index = cache.findIndex(findStall, user_id)
                cache.splice(index, 1)
                return
            }
        }
    }
}