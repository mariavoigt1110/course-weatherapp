const request = require('request')

const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibWFyaWF2b2lndCIsImEiOiJjazV4NTBnNTMyMmhvM2RvbmExOWF1N3o2In0.KlhVR7jLut_eIF-eBybIlw&limit=1'
    request({url, json: true}, (error, response)=>{
        if(error){
            callback('Can not connect to the internet', undefined)

        }
        else if(response.body.features.length === 0){
            callback('Unknown loacation', undefined)
        }
        else{
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name

            })
        }

    })
}
const newLocal = module.exports = geocode;