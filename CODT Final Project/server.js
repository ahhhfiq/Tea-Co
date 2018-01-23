"use strict"

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
var app = express();
var host = "127.0.0.1";
// var host = "192.168.42.176";
var port = 8080;
var home_file = "/index.html";

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

function gotoIndex(f, request, respond) {
    respond.sendFile(__dirname + f);
}

app.get(home_file, gotoIndex);

// Starts the Web Server
var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Tea&Co app listening at http://%s:%s", host, port);
});