const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req, res) {
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;
  res.send("The result of your calculation is "+ result);
});

app.get("/bmicalculator", function(req,res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req, res) {
  var wt = parseFloat(req.body.wei);
  var ht = parseFloat(req.body.hei);
  var result = (wt/(ht*ht));
  res.send("Your BMI is " + result);
});

app.listen(3000,function() {
  console.log("Server is running");
});
