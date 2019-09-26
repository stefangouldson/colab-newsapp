const {getNews} = require('./getNews')
const {getLocation} = require('./getLocation')

const main = async (places) => {
    const location = await getLocation(places)
    const news = await getNews(location)
    
    return {
        place: location.name,
        temp: temp,
        summary: weather.summary,
        icon: weather.icon
    };
    
}

module.exports = {
    main
};