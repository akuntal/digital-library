var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var jwt= require("jsonwebtoken");

// Initialize Express App
var app = express();

var router=express.Router();


// To generate jwt
process.env.SECRET_KEY="DIGITAL_LIBRARY";


// Use Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// bypass secure if it's test mode
if (process.env.NODE_ENV !== 'test') {  
    // secure book's api 
    app.use('/api/books',router);
    app.use('/api/book',router);
}

// validation middleware
router.use(function(req, res, next){
    // if (process.env.NODE_ENV === 'test') {
    //     next();
    //     return;
    // }
    var token=req.body.token || req.headers['token'];
    if(token){
        jwt.verify(token, process.env.SECRET_KEY,function(err,ress){
            if(err){
                res.status(401).send({'message':'Token Invalid'});
            }else{
                next();
            }
        })
    }else{
        res.status(401).send({'message':'Please send a token'})
    }
})

// Import API Routes
app.use(require('./api/user_api'));
app.use(require('./api/book_api'));

port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log("listening to port " + port);
})

module.exports = app;

