var express = require('express');
var router = express.Router();

var News = require('../models/news')


//CORS for develop
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




var getPages = function (req, res, next) {
    var perPage = 2;
    //should add isNaN assert 
    var page = req.params.page > 0 ? req.params.page : 0;
    News.find()
        .sort({
            date: "descending"
        })
        .skip(parseInt(page)*perPage)
        .limit(perPage)
        .exec(function (err, news) {
            if (err) {
                return next(err);
            }
            News.count({}, function (err, count) {
                console.log(count);
                res.send({
                    count:count,
                    news:news});
            });

        });
}

router.get("/",getPages);

router.get("/:page", getPages);

router.post("/", function (req, res, next) {
    var title = req.body.title;
    var content = req.body.content;
    var ImageUrl = req.body.ImageUrl;

    // err handler
    var test = new News({
        title: title,
        content: content,
        ImageUrl: ImageUrl,
        comments:[]
    });
    test.save(next);

});




module.exports = router;