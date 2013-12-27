var http = require('http');
var httpProxy = require('http-proxy');
var fs = require('fs');
var url = require('url');
var cookie = require('cookie');
var staticResource = require('static-resource');

// passing where is going to be the document root of resources.
var handler = staticResource.createHandler(fs.realpathSync('./dist'));

var proxy = new httpProxy.RoutingProxy();

var server = http.createServer(function(request, response) {
    var path = url.parse(request.url).pathname;
    // handle method returns true if a resource specified with the path
    // has been handled by handler and returns false otherwise.
    if(!handler.handle(path, request, response)) {

        var cookies = cookie.parse(request.headers.cookie);
        
        proxy.proxyRequest(request, response, {
            host: "192.168.0.51",
            port: 8889
        });

    }
});
server.listen(8080);