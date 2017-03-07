var express = require('express');
var router = express.Router();

var DB = require('../models/news')


//CORS for develop
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});






module.exports = router;