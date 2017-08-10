var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "library"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS books (id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), category VARCHAR(255), description VARCHAR(255), price DOUBLE(10,2), author VARCHAR(255), cover_image VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;    	 
    console.log("Table created");
  });
});


module.exports.findAll = function(callback) {
	con.query("SELECT * FROM books ORDER BY id DESC", callback);
}

module.exports.addBook = function(data, callback) {
  con.query("INSERT INTO books SET ?", data, callback);
}

module.exports.updateBook = function(data, condition, callback) {
  con.query("UPDATE books SET ? WHERE ?", [data, condition], callback);
}

module.exports.deleteBook = function(condition, callback) {
  con.query("DELETE FROM books WHERE ?", condition, callback);
}