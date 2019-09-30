const express = require('express');
const path = require('path');
const {getNews} = require('./getNews')

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/news", async (req, res)=>{
   let data = await getNews(req.query.location, req.query.cat)
   res.send(data)

});
app.listen(3006, () => {
   console.log("listening to port 3006");
})