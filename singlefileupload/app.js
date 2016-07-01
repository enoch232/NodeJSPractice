var express = require("express");
var multer = require("multer");
var upload = multer({dest: 'uploads/'});
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
var port = process.env.PORT || 3000
console.log("Server is now running at port "+ port );
app.listen(3000);
app.get("/", function( req, res, next ){
	res.render("index");
});
app.post("/", upload.single("myfile"), function( req, res, next ){
	res.send(req.file);
});