const { searchProductByQuery } = require("../models/product")
const { searchAllStall } = require("../models/stall")
const formatConvert = require("./formatConvert")
const stallIdToObject = require("./stallIdtoObject")

module.exports = async (word, price_range, categories) => {
    
    let query_name = '@name:"' + word + '"'
    let query_description = '@description:"' + word + '"'

    if (price_range) {
        let price = price_range.split("-")

        query_name += ' @price:[' + price[0] + ' ' + price[1] + ']'
        query_description += ' @price:[' + price[0] + ' ' + price[1] + ']'
    }

    if (categories) {
        let category = categories.split(",").toString().replace(",", "|");

        query_name += ' @category:{' + category + '}'
        query_description += ' @category:{' + category + '}'
    }

    // Add Weight to Query
    weighted_query_name = '(' + query_name + ') => { $weight: 5.0; }'
    weighted_query_description = '(' + query_description + ') => { $weight: 2.0; }'

    // Combine the Query
    final_query = weighted_query_name + '|' + weighted_query_description

    // console.log(final_query)
    // (@name:"potato") => { $weight: 5.0; }|(@description:"potato") => { $weight: 2.0; }
    // (@name:"potato" @price:[5000 9000]) => { $weight: 5.0; }|(@description:"potato" @price:[5000 9000]) => { $weight: 2.0; }
    // (@name:"potato" @price:[5000 9000] @category:{snack|salty}) => { $weight: 5.0; }|(@description:"potato" @price:[5000 9000] @category:{snack|salty}) => { $weight: 2.0; }

    let [result, stall] = await Promise.all([searchProductByQuery(final_query), searchAllStall()])
    let [formattedResult, formattedStall] = await Promise.all([formatConvert(result), formatConvert(stall)])

    if (formattedResult.count > 0) {
        formattedResult.data.map(stallIdToObject, formattedStall)
    }

    formattedResult.code = 0
    formattedResult.message = "Get Product by Query Success"

    return formattedResult
}