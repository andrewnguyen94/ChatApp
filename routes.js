// This file is required by app.js. It sets up event listeners
// for the two main URL endpoints of the application - /create and /chat/:id
// and listens for socket.io messages.

// Use the gravatar module, to turn email addresses into avatar images:

var gravatar = require('gravatar');
var login = require('config/login');
var register = require('config/register');
var user_profile = require('config/user_profile');

module.exports = function(app){
	app.get('/', function(req, res){
		res.end('Chat-App-By-Andrew');
	});

	app.post('/login', function(req,res){
		var username = req.body.username;
		var password = req.body.password;

		login.login(username,password, function(found){
			res.json(found);
		})
	});

	app.post('/register', function(req, res){
		var email = req.body.email;
		var username = req.body.username;
		var password = req.body.password;
		var gender = req.body.gender;
		var avatar = req.body.avatar;
		var cover_image = req.body.cover_image;

		register.register(email, username, password, gender,avatar,cover_image, function(found){
			res.json(found);
		})
	});

	app.post('/user_profile', function(req, res){
		var user_target_name = req.body.user_target_name;
		console.log(user_target_name);
		user_profile.user_profile(user_target_name, function(found){
			res.json(found);
		})
	})


}