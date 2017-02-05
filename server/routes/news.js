var express = require('express');
var router = express.Router();

var DB = require('../models/news');


router.get("/:id", function (req, res, next) {
    var id = req.params.id;
    DB.News.find({_id:id}).exec(function (err, news) {
        if (err) {
            return next(err);
        }
       res.send(news);

    });
});

module.exports = router;