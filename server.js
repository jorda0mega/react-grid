var connect = require("connect");
var mysql = require("mysql");

var connection = mysql.createConnection({
  database: "test",
  host: "localhost",
  user: "jorda0mega",
  password: ""
});

function getData(){
  var data = [];
  connection.query("select * from Persons", function(err, rows){
    data = rows;
  });

  return data;
}

connect.createServer(
	connect.static(__dirname)
).listen(8080);
