const express = require('express');
const path = require('path');
const {main} = require('./app')
const {getNews} = require('./getNews')

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/news", async (req, res)=>{
<<<<<<< HEAD
   // let data1 = await main(req.query.location);
   // // let data2 = await main(req.query.type);
   // res.send(data1);
   let data1 = getNews(req.query.location,req.query.category )
   res.send(data1)

=======
   let data1 = await main(req.query.location);
   let data2 = await main(req.query.type);
   res.send(data1);
>>>>>>> 7798eb6793d2dcc516995e0d7f108890d84fcb2c
});
app.listen(3006, () => {
   console.log("listening to port 3006");
})