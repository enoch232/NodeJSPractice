var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
	if(req.url === '/'){
		console.log("get->index.html");
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	}else{
		res.writeHead(404);
		res.end();
	}


}).listen(3000,'127.0.0.1');
console.log('server is running at 3000...')