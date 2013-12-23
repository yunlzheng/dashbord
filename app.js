var http = require('http');
var fs = require('fs');
var url = require('url');
var staticResource = require('static-resource');

// passing where is going to be the document root of resources.
var handler = staticResource.createHandler(fs.realpathSync('./dist'));

var server = http.createServer(function(request, response) {
    var path = url.parse(request.url).pathname;
    // handle method returns true if a resource specified with the path
    // has been handled by handler and returns false otherwise.
    if(!handler.handle(path, request, response)) {

    	console.log(path);
    	console.log(request.headers.cookie);

        response.writeHead(404);
        response.write('404');
        response.end();
    }
});
server.listen(8080);