var express = require('express');
var app = express();
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function(req, res, next){
	console.log("requested url"+req.url);
	next();
});
app.get('/', function(req, res){
	res.send("<html><head><link href = 'assets/style.css' type = 'text/css' rel = 'stylesheet' /></head><body>Hello world!</body></html>");
});
app.get('/api', function(req, res){

	res.json({firstname: "Enoch", lastname: "Ko"});
});
app.get('/person/:id', function(req, res){
	res.send("<html><body>Hello, "+req.params.id+"</body></html>");
});





app.listen(3000);
console.log("Server is now running...");
