var fs = require('fs');

var https = require('https');
var express = require('express');
var static = require('node-static');
var app =express();
var path = new static.Server(`${__dirname}`);





app.use(express.static(__dirname + '/'));

https.createServer({
    key: fs.readFileSync('cert/private.key'),
    cert: fs.readFileSync('cert/certificate.crt')
}, app).listen(8090);


