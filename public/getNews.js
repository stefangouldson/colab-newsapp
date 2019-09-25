const request = require ('request')
const {promisify} = require('util')
const promisifiedRequest = promisify(request)
const{apiKey} = require('./keys')


const getNews = () => {
    `https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-25&sortBy=publishedAt&apiKey=${apiKey}`
}