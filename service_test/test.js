const express = require("express");
const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  

app.get('/eiei/:input1&:input2',(req,res)=>{
    var answer = parseInt(req.params.input1) * parseInt(req.params.input2)
    console.log(answer)
    res.send(answer.toString());    
});

app.listen(6969,()=>{
    console.log("Start successfully")
});