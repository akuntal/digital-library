var express = require('express');
var HttpStatus = require('http-status-codes');
var app = express();

// Import Book Module Containing Functions Related To Books
var book = require('../models/book');

// API fetch all books
app.get('/api/books', function(req, res) {
	try {
		book.findAll(function(err, rows, fields) {
			if(err){ 
				console.log('Error occured fetching books list, Error code '+err.code)
				res.status(HttpStatus.BAD_REQUEST).send({'status':'failure', 'message':'error while fetching books'})
				return
			};
			res.json(rows);
		})
	} catch(err){
		console.log('Inside catch '+JSON.stringify(err));
		res.send({'status':'failure', 'message':'error while fetching books'})
	}
});

// API add new book
app.post('/api/book', function(req, res, next) {
	var data = req.body;
	if (!data.name) {
		res.status(HttpStatus.BAD_REQUEST).send({'status':'failure', 'message':'Required fields can\'t be empty'})				
		return;
	}

	try {
		book.addBook(data,function(err, rows, fields){
			if(err) {
				console.log('Error occured while adding new book, book model - '+ JSON.stringify(data)+' Error code '+err.code)
				res.status(HttpStatus.BAD_REQUEST).send({'status':'failure', 'message':'error while adding new book'})
				return
			};		
			res.json(data);
		})
	} catch(err){
		console.log('Inside catch '+JSON.stringify(err));
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({'status':'failure', 'message':'error while adding new book'})
	}
});

// API update a book
app.put('/api/book/:book_id', function(req, res, next) {
	var data = req.body;
	if (!data.name) {
		res.status(HttpStatus.BAD_REQUEST).send({'status':'failure', 'message':'Required fields can\'t be empty'})				
		return;
	}
	var condition  = {"id": data.id};
	try{
		book.updateBook(data, condition, function(err, rows, fields){
			if(err) {
				console.log('Error occured while updating book, book model - '+ JSON.stringify(data)+' Error code '+err.code)
				res.status(HttpStatus.BAD_REQUEST).send({'status':'failure', 'message':'error while updating book'})
				return;
			};		
			res.json(data);
		})
	} catch(err){
		console.log('Inside catch '+JSON.stringify(err));
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({'status':'failure', 'message':'error while updating book'});
	}	
	
});

// API delete a book
app.delete('/api/book/:book_id', function(req, res, next) {
	var book_id = req.params.book_id;
	try{
		book.deleteBook({"id":book_id}, function(err, rows, fields){
			if(err) {
				console.log('Error occured while updating book, book_id - '+ book_id+' Error code '+err.code)
				res.status(HttpStatus.BAD_REQUEST).send({'status':'failure', 'message':'error while updating book'})
				return;
			};		
			res.json(book_id);
		})
	}catch(err){
		console.log('Inside catch '+JSON.stringify(err));
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({'status':'failure', 'message':'error while updating book'});	
	}
	
});

// API search for books
app.put('/api/books/search', function(req, res, next) {
	var bookname = req.body.bookname;
	try{
		book.searchBooks(bookname, function(err, rows, fields){
			if(err) {
				console.log('Error occured while updating book, book name - '+ bookname+' Error code '+err.code)
				res.status(HttpStatus.BAD_REQUEST).send({'status':'failure', 'message':'error while updating book'})
				return;
			};
			res.json(rows);
		})
	}catch(err){
		console.log('Inside catch '+JSON.stringify(err));
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({'status':'failure', 'message':'error while searching'});	
	}	
	
});


app.get('/api/book/:book_id', function(req, res, next){
	var book_id = req.params.book_id;
	try{
		book.findBook(book_id, function(err, rows, fields){
			if(err){
				console.log('Error occured while updating book, book name - '+ bookname+' Error code '+err.code)
				res.status(HttpStatus.BAD_REQUEST).send({'status':'failure', 'message':'error while updating book'})
				return;
			}
			res.json(rows);
		})
	} catch(err){
		console.log('Inside catch '+JSON.stringify(err));
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({'status':'failure', 'message':'error while searching'});	
	}
})

module.exports = app;