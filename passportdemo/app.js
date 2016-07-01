var express = require("express");
var passport = require("passport");
var mongoose = require("mongoose");
var bodyParase = require("body-parser");
var LocalStrategy = require("passport-local").Strategy;
var app = express();
var port = process.env.PORT || 3000;
console.log("Server now running at port "+ port);
User = require("./models/user");
app.listen(port);
app.get("/", function(req, res){
	res.render("index");
});
//middleware
app.set("view engine","ejs");
mongoose.connect("mongodb://localhost:27017/passport");
passport.use(new LocalStrategy(function(username, password, done){
	User.findOne({username: username}, function(err, user){
		if (err){
			return done(err);
		}
		if (!user){
			console.log("User does not exist")
			return done(null, false, {message: "User does not exist"});
		}
		if (!user.validPassword(password)){
			console.log("Incorrect password");
			return done(null, false, {message: "Incorrect password"});
		}
		return done(null, user);
	});
}));
app.get("/login", function(req, res){
	res.render("login");
});
app.post("/login", passport.authenticate("local", {
	successRedirect: "/dashboard",
	failureRedirect: "/login"
}));
app.get("/register", function(req, res){
	res.render("register");
});
app.post("/register", function(req, res){
	

})
app.get("/dashboard", function(req, res){
	res.render("dashboard");
});