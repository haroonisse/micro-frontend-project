var express = require("express");
var morgan = require("morgan");
var path = require("path");

var app = express();

app.use(morgan("short"));

var staticPath = path.join(__dirname, "static");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./bootstrap/dist/"));
});

app.get("/mfe/welcome", (req, res) => {
  res.sendFile(path.join(__dirname, "./welcome/dist/"));
});

app.get("/mfe/music", (req, res) => {
  res.sendFile(path.join(__dirname, "./music/build/"));
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
