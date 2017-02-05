var express = require('express');
var router = express.Router();

var DB = require('../models/news')


//CORS for develop
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




var getPages = function (req, res, next) {
    var perPage = 4;
    //should add isNaN assert 
    // if(isNaN(req.params.page)){
    //     next();
    // }
    var page = req.params.page > 0 ? req.params.page : 0;
    DB.News.find()
        .sort({
            date: "descending"
        })
        .skip(parseInt(page)*perPage)
        .limit(perPage)
        .exec(function (err, news) {
            if (err) {
                return next(err);
            }
            DB.News.count({}, function (err, count) {
                console.log(count);
                res.send({
                    count:count,
                    news:news});
            });

        });

       // console.log("Hello /");
}

router.get("/",getPages);

router.get("/:page", getPages);



router.post("/", function (req, res, next) {
    var title = req.body.title;
    var content = req.body.content;
    var ImageUrl = req.body.ImageUrl;

    // err handler
    var test = new DB.News({
        title: title,
        content: content,
        ImageUrl: ImageUrl,
        comments:[]
    });
    test.save(next);
});

router.post("/genseeds", function (req, res, next) {

    for(var i = 30; i<60;i++){
        var news = new DB.News({
            title : "Title" + i,
            description : "DESCRIPTION PLACE",
            content : new DB.Content({content:"HTML"}),
            ImageUrl: "../assets/"+Math.floor(Math.random()*6)+".jpg"
        });
        news.save();
    }
    next();


});




module.exports = router;