var mongoose=require("mongoose");
var studentschema=new mongoose.Schema({
    name:String,
    age:Number,
    batch:String,
    email:String,
    password:String
})
var studentmodel=mongoose.model("Aptech_students",studentschema);
module.exports=studentmodel;