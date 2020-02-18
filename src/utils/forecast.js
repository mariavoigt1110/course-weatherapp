const request = require('request')


const forecast = (latitude, longitude, callback)=>{
    const url = 'https://api.darksky.net/forecast/cfffbc928ae6613b09e6b8254f1a2bfa/'+ latitude +','+longitude
    request({url, json: true}, (error, response)=>{
        if(error){
            callback('Can not connect to the internet', undefined)

        }
        else if(response.body.error){
            callback('Unknown loacation', undefined)
        }
        else{
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + '. There is a ' + response.body.currently.precipProbability +'% chance of rain.')
            
        }
       

    })
}
module.exports = forecast