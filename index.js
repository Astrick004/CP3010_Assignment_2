var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename;

    if (q.pathname === '/index') {
        filename = './index.html';
    } else if (q.pathname === '/about') {
        filename = './about.html';
    } else if (q.pathname === '/contact-me') {
        filename = './contact-me.html';
    } else {
        filename = './404.html'; 
    }

    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            return res.end('500 Server Error');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);

