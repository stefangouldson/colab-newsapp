const request = require ('request')
const {promisify} = require('util')
const promisifiedRequest = promisify(request)
const{apiKey} = require('./keys')

// get news from api, need to add country and type of news later.
const getNews = async(location) => {
    try{
        let data = await
    promisifiedRequest({url: `https://newsapi.org/v2/top-headlines?country=${location}s&category=${type}&apiKey=${apiKey}`,json: true})
    return(data.body.articles)
 }  catch (error){
        console.log("Something has gone wrong!")
    }
}

module.exports = {
    getNews
}