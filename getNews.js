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
    // console.log(data.body.articles[0])
    
        let random = Math.floor(Math.random() * 20);

    return {
        body: data.body.articles[random],
        title: data.body.articles[random].title,
        content: data.body.articles[random].description,
        image: data.body.articles[random].urlToImage,

        body2: data.body.articles[random+1],
        title2: data.body.articles[random+1].title,
        content2: data.body.articles[random+1].description,
        image2: data.body.articles[random+1].urlToImage,

        body3: data.body.articles[random+2],
        title3: data.body.articles[random+2].title,
        content3: data.body.articles[random+2].description,
        image3: data.body.articles[random+2].urlToImage,

        body4: data.body.articles[random+3],
        title4: data.body.articles[random+3].title,
        content4: data.body.articles[random+3].description,
        image4: data.body.articles[random+3].urlToImage,
    }
}  catch (error){
        console.log("Something has gone wrong!")
    }
}

module.exports = {
    getNews
}
