const {getNews} = require('./getNews')
const {getLocation} = require('./getLocation')

const main = async (places) => {
    const location = await getLocation(places)
    const news = await getNews(location)
    
    return {
        // thing we want to return
        place: location,
        title: news.title,
        summary: news.description,
        author: news.author,
        content:news.content,
        date: news.publishedAt,
        url: news.url,
        img: news.urlToImage
    };
    
}

module.exports = {
    main
};