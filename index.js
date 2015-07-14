var express = require('express');
var app = express();

app.use(express.static('app'));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});