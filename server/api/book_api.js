var express = require('express');
var app = express();

// Import User Module Containing Functions Related To User Data
var book = require('../models/book');

app.get('/', function(req, res) {

	book.findAll(function(err, rows, fields) {
		console.log(err);
		if(err) throw err;
		res.json(rows);
	})
});
module.exports = app;