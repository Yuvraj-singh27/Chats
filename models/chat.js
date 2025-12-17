const mongoose = require("mongoose");

const chatSchema =new  mongoose.Schema({
   from:{
      type:String,
      require:true
   },
   to:{
      type:String,
      require:true
   },
   message:{
      type:String,
      require:true
   },
   created_at:{
      type:Date,
      default: Date.now
   },
});

const Chat = mongoose.model("Chat",chatSchema);
module.exports=Chat;