const express = require("express");


const app = express();

app.get("/", (req, res) => {

  res.send("<h1> Hello Jii </h1>");
});

app.listen(3000, () => {

  console.log("Listening to port 3000");
  console.log("code changed");
});
