var express = require('express');
var router = express.Router();

var News = require('../models/news')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get("/", function (req, res, next) {
    News.find()
        .sort({
            date: "descending"
        })
        .exec(function (err, news) {
            if (err) {
                return next(err);
            }
            // res.render("index", {
            //     news: news
            // });

            res.send(news);
        });
});

router.post("/", function (req, res, next) {
 var title = req.body.title;
 var content = req.body.content;
 var ImageUrl = req.body.ImageUrl;

 // err handler


 var test = new News({
   title:title,
   content:content,
   ImageUrl:ImageUrl

 });
 test.save(next);

});




module.exports = router;
