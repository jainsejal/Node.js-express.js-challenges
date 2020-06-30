const express = require("express");
const app = express();
// so these are the conditions if somebody goes on one of these routes like if somebody goes to route home show Hello
// if somebody see the page contact show this
app.get("/", function(req, res){
  res.send("<h1>Hello</h1>");
});
app.get("/contact", function (req, res) {
  res.send("Contact me on sejaljain11194@gmail.com");
});
app.get("/about", function (req, res) {
  res.send("<h2> I am sejal jain the owner of the website. I am a full stack web developer and I welcome you to my page</h2>");
});
app.listen(3000, function() {
  console.log("server has started");
});
