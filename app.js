var http = require('http');
var fs = require('fs');

function notFound(response){
	response.writeHead(404, {"Context-Type":"text/plain"});
	response.write("404:Page Not Found!");
	response.end();
}

function onRequest(request, response){

	if(request.method == "GET" && request.url == "/"){
		response.writeHead(200, {"Context-Type":"text/html"});
		fs.createReadStream('./index.html').pipe(response);
		//response.end();
	}else{
		notFound(response);
	}








}



http.createServer(onRequest).listen(8888);
console.log("Server now running...");