var express = require("express");
var mysql = require("mysql");
var app = express();

// app.all("/", function(req, res, next){
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.next();
// });

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

app.get("/", function(req, res, next){
  res.send("hello world");
});

app.get("/data", function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  var connection = mysql.createConnection({
    database: "test",
    host: "localhost",
    user: "jorda0mega",
    password: ""
  });

  connection.query("select * from Persons", function(err, rows){
    res.jsonp(rows);
  });
});

app.use(express.static(__dirname));

app.listen(8080);
