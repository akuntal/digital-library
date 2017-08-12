// get the mysql connection
var con  = require('../config/config');

module.exports.registerUser = function(user, callback){
	con.query("INSERT INTO users SET ?", user, callback);
}

module.exports.findUser = function(email, callback){
	con.query("SELECT * FROM users WHERE email = ?", email, callback);
}