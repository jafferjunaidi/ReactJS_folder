var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/db_Lab208").then(()=>
{
    console.log("Database connected")
})