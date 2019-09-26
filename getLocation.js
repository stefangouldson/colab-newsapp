const request = require ('request')
const {promisify} = require('util')
const {pk} = require('./keys')

const promisifiedRequest = promisify(request)

const getLocation = async (places) => {
    try {
        let data1 = await promisifiedRequest({url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${places}.json?access_token=${pk}`, json: true})        
        return({
            country: data1.body.context[1].short_code,

        })
    } catch (error) {
        console.log("ooops error has occured")
    }
}

module.exports = {
    getLocation
}