var http=require('http');
http.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("first page of assignment");

}).listen(8080);
