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
mongoose.connect("mongodb+srv://prabhas:Password1*@cluster0.j1kcoh4.mongodb.net/group57Database", {
          useNewUrlParser: true

}).then(() => console.log("MongoDB Connected"))
          .catch(err => console.log(err));



// define route
app.use('/', route);


// Application listeners
app.listen(process.env.PORT || 3000, function () {
          console.log("Server running on PORT  " + (process.env.PORT || 3000));
});