var mongoose = require("mongoose");


var newsSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    //Iner Html
    content:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content' ,
       // require:true
    },
    date:{
        type: Date,
        default: Date.now
    },
    ImageUrl:{
        type:String,
        require:true
    },
    //Comments
     comments : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]

});

var commentSchema = mongoose.Schema({


  _creator : { type: Number, ref: 'News' },
  content    : String
//User


});

var contentSchema = mongoose.Schema({
  //_creator : { type: Number, ref: 'News' },
  content    : String
});



var Content = mongoose.model("Content",commentSchema);
var Comment = mongoose.model("Comment",commentSchema);
var News = mongoose.model("News",newsSchema);

module.exports = {
    News:News,
    Comment:Comment,
    Content:Content
}

