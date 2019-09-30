const request = require ('request')
const {promisify} = require('util')
const promisifiedRequest = promisify(request)
const{apiKey} = require('./keys')

// get news from api, need to add type of news later.
const getNews = async(location, cat) => {
    try{
        let data = await
    promisifiedRequest({url: `https://newsapi.org/v2/top-headlines?country=${location}&category=${cat}&apiKey=${apiKey}`, json: true})
    //returns JSON string that returns evrything int the article object 
    return(data.body.articles[0])
}  catch (error){
        console.log("Something has gone wrong!")
    }
}

module.exports = {
    getNews
}
