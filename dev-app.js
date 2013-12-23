var http = require('http');
var httpProxy = require('http-proxy');
var fs = require('fs');
var url = require('url');
var cookie = require('cookie');

var proxy = new httpProxy.RoutingProxy();

var server = http.createServer(function(request, response) {
    var path = url.parse(request.url).pathname;

    if(!handler.handle(path, request, response)) {

        var cookies = cookie.parse(request.headers.cookie);
        
        proxy.proxyRequest(request, response, {
            host: "192.168.0.51",
            port: 8889
        });

    }
});
server.listen(8080);