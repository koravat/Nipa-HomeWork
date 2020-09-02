var express = require("express");
var routes = require("./index.js");
var app = express();

app.listen(3000,()=>{
    console.log("port 3000")
});

app.use('/',routes)