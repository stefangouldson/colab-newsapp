const {getNews} = require('./getNews')
const {getLocation} = require('./getLocation')

const main = async (places) => {
    const location = await getLocation(places)
    const news = await getNews(location)
    
    return {
        // thing we want to return
        place: location,
        title: news.title,
        content:news.content,
        img: news.urlToImage
    };
    
}

module.exports = {
    main
};