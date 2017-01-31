var mongoose = require("mongoose");


var newsSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true
    },
    content:{
        type:String,
        require:true
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





var Comment = mongoose.model("Comment",commentSchema);
var News = mongoose.model("News",newsSchema);

module.exports = News;