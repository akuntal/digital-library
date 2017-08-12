var express = require('express');
var HttpStatus = require('http-status-codes');
var app = express();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var user = require('../models/user');
var salt = bcrypt.genSaltSync(10);


app.post('/api/user', function(req, res, next){
	// hashed password to store in db
	var hash = bcrypt.hashSync(req.body.password, salt);
	var data = { 'email': req.body.email, 'password': hash}

	user.registerUser(data, function(err, rows, fields){
		if(err){
			console.log("Error while creating user");
			res.status(HttpStatus.BAD_REQUEST).send({"message": "Error"})
			return; 
		}
		res.send({"message": "User created"});
	})
	
})


// login api
app.post('/api/login', function(req, res, next){
	var email = req.body.email;
    var password = req.body.password;
    try {
	    user.findUser(email, function(err, rows, fields){
	    	if (err) {
	          	res.status(HttpStatus.BAD_REQUEST).send({
	            	message:'there are some error with query'
	            })
	            return;
	      	}
	      	if(rows.length > 0){
	      		// compare password with the stored one
	      		bcrypt.compare(password, rows[0].password, function(err, valid){
	      			if(!valid){
	      				res.send({message:"Email and password does not match"});
	      				return;
	      			}

	      			// Generate json web token 
	      			var token = jwt.sign(rows[0],process.env.SECRET_KEY,{
	                    expiresIn:5000
	                });
	      			res.send({"token": token});
	      		})
	      	} else{
	      		res.send({message:"Email does not exist"});
	      		return;
	      	}
	    })
	} catch(err){
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({"message":"Internal server error", "error":err})
	}
})

module.exports = app;