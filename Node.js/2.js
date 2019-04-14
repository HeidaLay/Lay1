var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'ContentType':'text/plain'});
    res.end("hello,world");
}).listen(3000);
console.log('serve start');