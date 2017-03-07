var express = require('express');
var router = express.Router();

var DB = require('../models/news');





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

router.get("/id/:id", function (req, res, next) {
    
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

    for(var i = 0; i<60;i++){

        var content = new DB.Content({
            content:"HTML <b>span</b>"
        });
        content.save();

        var news = new DB.News({
            title : "Title" + i,
            description : "DESCRIPTION PLACE",
            content : content,
            ImageUrl: "../assets/"+Math.floor(Math.random()*6)+".jpg"
        });
        news.save();
    }
    next();


});


module.exports = router;