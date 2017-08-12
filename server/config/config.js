var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'library'
});
connection.connect(function(err){
	if(!err) {
	    console.log("Database is connected");

	    var userSql = "CREATE TABLE IF NOT EXISTS users (id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, email varchar(255) NOT NULL, password varchar(255) NOT NULL)";
	    connection.query(userSql, function(err, result){
	    	if(err) throw err;
	    	console.log("User table created");
	    })

	    var sql = "CREATE TABLE IF NOT EXISTS books (id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, category VARCHAR(255), description VARCHAR(255), price DOUBLE(10,2), author VARCHAR(255), cover_image VARCHAR(255))";
	  	connection.query(sql, function (err, result) {
	    	if (err) throw err;    	 
	    	console.log("Table created");
	  	});
	} else {
	    console.log("Error while connecting with database");
	}
});
module.exports = connection;