"use strict"

const LoginDB = require('../models/MemberDB');
const jwt = require('jsonwebtoken');

var loginDB = new LoginDB();

function register(request,respond) {
    var now = new Date();

    var userReg = {
        "username":request.body.username,
        "password":request.body.password
    };
       
    loginDB.registerUser(userReg, function (error, result) {
        console.log(result)
        if (error || result.length == 0) {
            respond.status(200).json({
                "message": "Something went wrong",
                error
            });
        }
        else {
            var token = jwt.sign({"username": result.Username}, "secretstring",{expiresIn:3000} )
            respond.status(200).json({
                token,    
                "username": result.Username,            
                "message": "Success"
            });
        }
    });
}

function login(request, respond) {
    // var now = new Date();

    var user = { "username": request.body.username, "password": request.body.password };
    // user.username=request.body.username;
    // user.password = request.body.password;

    loginDB.loginUser(user, function (error, result) {

        if (error || result.length == 0) {
            respond.status(200).json({
                "message": "Something went wrong"
            });
        }
        else {
            var token = jwt.sign({ "username": result[0].username}, "secretstring",{expiresIn:3000} )
            respond.status(200).json({
                token,    
                "username": result[0].username,            
                "message": "Success"
            });
        }
    });
}


module.exports = { register, login };