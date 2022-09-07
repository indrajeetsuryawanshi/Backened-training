const express = require('express');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./route/route.js');
const app = express();


// use Nodejs bodyParser middleware

// parse application/json
app.use(bodyParser.json());

// parse application/ x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Database connected
mongoose.connect("mongodb+srv://indrajeetsuryawanshi:kHo53Tt2sY3LaEpW@cluster0.lmzpn5e.mongodb.net/project-1group57-DB", {
          useNewUrlParser: true

}).then(() => console.log("MongoDB Connected"))
          .catch(err => console.log(err));



// define route
app.use('/', route);


// Application listeners
app.listen(process.env.PORT || 3000, function () {
          console.log("Server running on PORT  " + (process.env.PORT || 3000));
});