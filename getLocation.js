const request = require ('request')
const {promisify} = require('util')
const {pk} = require('./keys')

const promisifiedRequest = promisify(request)

const getLocation = async (places) => {
    try {
        let data1 = await promisifiedRequest({url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${places}.json?access_token=${pk}`, json: true})        
        return({
            // returns the shorthand country code "US"
            location: data1.body.place.place.features[0].context[3].short_code,

        })
    } catch (error) {
        console.log("ooops error has occured")
    }
}

module.exports = {
    getLocation
}