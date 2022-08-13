const app = require("../loaders/fastify")
const { schemaList, createUserSchema, createProductSchema, createStallSchema } = require("../models/schema")

let mandatorySchemas = [ "user_idx", "product_idx", "stall_idx" ]

module.exports = async () => {
    let isAvailable

    const schema = await schemaList()

    for (const mandatorySchema of mandatorySchemas) {
        isAvailable = schema.find(element => element === mandatorySchema)

        if (isAvailable) continue

        switch (mandatorySchema) {
            case "user_idx":
                await createUserSchema()
                app.log.info("creating User Schema");
                break
            case "product_idx":
                await createProductSchema()
                app.log.info("creating Product Schema");
                break
            case "stall_idx":
                await createStallSchema()
                app.log.info("creating Stall Schema");
                break
        }
    }

    return {
        msg: "Schemas are ready"
    }
}