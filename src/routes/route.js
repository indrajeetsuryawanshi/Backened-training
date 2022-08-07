const express = require('express');
const abc = require('../introduction/intro')
const pqr = require('../logger/logger.js')
const route=require('../util/helper.js')
const skill=require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
     pqr.cohort()
     route.date()
     route.month()
     route.info()
     skill.team()
     skill.stop()
     skill.start()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason