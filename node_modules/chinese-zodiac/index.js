const data = require('./data')

function getNT(year) {
    year = parseInt(year)
    const sign_index = year % 12
    // console.log(sign_index)
    const sign = data.z(sign_index)
    // console.log(sign)
    let result = Object.assign(data.zodiac[sign], data.zodiac_result[sign]);
    // console.log(result)
    return result
}

module.exports = getNT