const express = require('express');
const path = require('path');
const {getNews} = require('./getNews')

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/news", async (req, res)=>{
   let data = await getNews(req.query.location, req.query.cat)
  // console.log(data)
   res.send(data)

});
app.listen(3005, () => {
   console.log("listening to port 3005");
})