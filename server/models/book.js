// get the mysql connection
var con = require('../config/config');

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

module.exports.searchBooks = function(condition, callback) {
  con.query("SELECT * FROM books WHERE name LIKE '%"+condition+"%'", callback);
}

module.exports.findBook = function(book_id, callback) {
  con.query("SELECT * FROM books WHERE id = "+book_id, callback);
}