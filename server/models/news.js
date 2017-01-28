var mongoose = require("mongoose");


 // data = {
  // 	title:"Title1",
  // 	content:"aaaaaaaa",
  // 	date: "dd/MM/yyyy",
  // 	comments:[1,2,3,4,5,6],
  // 	image:"../assets/hierarchicalstructureofthei.jpg"
  // }

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
    }
    //Comments

});

var News = mongoose.model("News",newsSchema);

module.exports = News;