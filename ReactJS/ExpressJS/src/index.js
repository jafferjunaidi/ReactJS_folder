require("./connection")

var express = require('express');

var student = require("./Models/Aptech_students")

var cors = require("cors");

 var bodyParser = require("body-parser")

var app = express();

app.use(cors())

app.use(bodyParser.json())

app.post("/stdinsert", (req,res) => {
    student.create(req.body).then((std) => {
        res.send(std)
    })
})


app.listen(4000)