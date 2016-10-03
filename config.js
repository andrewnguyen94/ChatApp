var express = require('express');
var connect = require('connect');

module.exports = function(app, io){
	console.log(1, app);
	app.use(express.static(__dirname + '/public')); 
	app.use(connect.logger('dev')); 
	app.use(connect.json()); 
	app.use(connect.urlencoded());
}