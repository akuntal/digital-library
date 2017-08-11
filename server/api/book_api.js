var express = require('express');
var app = express();

// Import Book Module Containing Functions Related To Book Data
var book = require('../models/book');

app.get('/api/books', function(req, res) {
	book.findAll(function(err, rows, fields) {
		console.log(err);
		if(err) throw err;
		res.json(rows);
	})
});

app.post('/api/book/add', function(req, res, next) {
	var data = req.body;
	book.addBook(data,function(err, rows, fields){
		if(err) throw err;		
		res.json(data);
	})
});

app.put('/api/book/update', function(req, res, next) {
	var data = req.body;
	var condition  = {"id": data.id};	
	book.updateBook(data, condition, function(err, rows, fields){
		if(err) throw err;
		res.json(data);
	})
});

app.delete('/api/book/:book_id', function(req, res, next) {
	var book_id = req.params.book_id;
	book.deleteBook({"id":book_id}, function(err, rows, fields){
		if(err) throw err;
	 	res.json(book_id);
	})
});

app.put('/api/books/search', function(req, res, next) {
	var bookname = req.body.bookname;	
	book.searchBooks(bookname, function(err, rows, fields){
		if(err) throw err;
	 	res.json(rows);
	})
});

module.exports = app;