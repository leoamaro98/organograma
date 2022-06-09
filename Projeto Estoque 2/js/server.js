var fs = require('fs');

var https = require('https');
var http = require('http');

var express = require('express');
var static = require('node-static');
var app = express();
var path = new static.Server(`${__dirname}`);

app.use(express.static(__dirname + '/'));


https.createServer({
    key: fs.readFileSync('cert/private.key'),
    cert: fs.readFileSync('cert/certificate.crt')
}, app).listen(8090);



app.use((req, res) => { //Cria um middleware onde todas as requests passam por ele
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) //Checa se o protocolo informado nos headers é HTTP
        res.redirect(`https://${req.hostname}${req.url}`); //Redireciona pra HTTPS
    else {

    }

});