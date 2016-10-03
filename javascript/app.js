var express = require('express');
var mongoose = require('mongoose');
var http = require('http');



var app = express();

app.get('/', function(req, res){
	res.render('index');
});



app.listen(3000, function(){
	console.log('mother fuck!!');
});


// http.createServer(function(req, res){
// 	res.writeHead(200, {'content-type':'text/plain'});
// 	res.end('mother fuck the whole world!!!!');
// }).listen(3000, '127.0.0.1');
// console.log('server is running');

