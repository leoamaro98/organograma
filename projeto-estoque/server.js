var http = require('http');
var static = require('node-static');
var path = new static.Server(`${__dirname}`);
console.log("O path é", path);



http.createServer(function (req, res) {
    req.addListener('end', function () {
        path.serve(req, res);
    }).resume();
}).listen(8090);

console.log("Server Criado em: localhost:8090");