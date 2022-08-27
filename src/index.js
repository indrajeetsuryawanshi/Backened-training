const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment=require('moment')
const newmid=  require('./middlewares/commonMiddlewares');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://indrajeetsuryawanshi:kHo53Tt2sY3LaEpW@cluster0.lmzpn5e.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use (function (req, res,next){
    const today=moment().format('YYYY-MM-DD')
  
let ip = req.ip
let path = req.path
console.log (today,ip,path)


next();
})


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
