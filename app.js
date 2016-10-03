var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit : '50mb'}));

// Require the configuration and the routes files, and pass
// the app and io as arguments to the returned functions.

require('./routes')(app);
app.listen(port, function(){
	console.log('Your application is running on http://localhost:' + port);
});






