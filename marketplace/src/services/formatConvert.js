module.exports = async (array) => {
    let response = {}

    response.count = array[0]

    if (response.count > 0) {
        let formattedData = []
        for (let i = 1; i < array.length; i++) {
            
            // if odd index
            if (i % 2 != 0) {
                formattedData.push({
                    id: array[i].split(":")[1]
                })
            }

            // if even index
            if (i % 2 == 0) {
                let currentIndex = formattedData.length - 1
                
                // iterate the array inside array
                for (let j = 0; j < array[i].length; j++) {
                    if (j % 2 != 0) continue

                    // If can be parse to float, then provide float instead of string
                    formattedData[currentIndex][array[i][j]] = parseFloat(array[i][j + 1]) ? 
                                                                parseFloat(array[i][j + 1]) : 
                                                                array[i][j + 1]
                }
            }
        }
        response.data = formattedData
    }
    return response
}