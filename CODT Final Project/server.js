"use strict"

const express = require('express');
const bodyParser = require('body-parser');
const routeAuth = require('./routes/routeLogin');
const jwt = require('jsonwebtoken');

var app = express();
var host = "127.0.0.1";
// var host = "192.168.42.235";
var port = 8080;
var home_file = "/index.html";

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routeAuth.routeMember(app);

app.use((req,res,next) =>{
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token){
        jwt.verify(token ,"secretstring", (err,decode)=>{
            if(err){
                res.status(403).json({
                    message : "Wrong Token"
                })
            }
            else{
                req.decode = decode;
                console.log("valid token");
                next();
            }
        })
    }
})

app.route('/user',(req,res,next) =>{
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, "secretstring", (err, decode) => {
            if (err) {
                window.location.href = "/login.html";
                res.status(403).json({
                    message: "Wrong Token"
                })
            }
            else {
                req.decode = decode;
                console.log("valid token");
                next();
            }
        })
    }
})

function gotoIndex(f, request, respond) {
    respond.sendFile(__dirname + f);
}



app.get(home_file, gotoIndex);

// Starts the Web Server
var server = app.listen(port, host, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Tea & Co. app listening at http://%s:%s", host, port);
});