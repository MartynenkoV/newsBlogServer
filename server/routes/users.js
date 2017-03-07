var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/genseeds', function(req, res, next) {

  res.send('respond with a resource');
});

router.post('/signin',function(req,res,next){
  var username = req.body.username;
  //params from form

  // User.findOne({ username: username, password: password }, function (err, user) {
  //   if (err) {
  //     console.log(err);
  //     return res.status(500).send();
  //   }

  //   if (!user) {
  //     return res.status(404).send();
  //   }
  //   return res.status(200).send();
  // });
});

router.post('/signup',function(req, res, next){
var username = req.body.username;
//params from form

var newuser = new User();
newuser.username = username;
//assign all params

//newuser.save(function(err,savedUser){
  // if(err){
  //   console.log(err);
  //   return res.status(500).send();
  // }
  // return res.status(200).send();
//});

});
module.exports = router;
