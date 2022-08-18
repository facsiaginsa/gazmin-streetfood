const { searchProductByQuery } = require("../models/product")
const formatConvert = require("./formatConvert")

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

    console.log(final_query)
    let result = await searchProductByQuery(final_query)
    let formattedResult = await formatConvert(result)

    formattedResult.code = 0
    formattedResult.message = "Get Product by Query Success"

    return formattedResult

}