var express = require('express');
var router = express.Router();

var DB = require('../models/news');


router.get("/:id", function (req, res, next) {
    
    var id = req.params.id;
    DB.News.findOne({_id:id}).exec(function (err, news) {
        if (err) {
            return next(err);
        }  

       DB.Content.findOne({_id:news.content}).exec(function (err, content){
            console.log(content);
            res.send({news:news, content:content});
       });

       

    });
});

module.exports = router;