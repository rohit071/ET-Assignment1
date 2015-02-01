
var http = require('http');
var express = require('express');

var app = express();
var port = process.env.port || 1337;

app.use(express.static(__dirname, 'Rohit_300718350_WebSite'));

app.get('/', function (request, response) {
    response.sendfile("index.html");
});


app.listen(port);

/*
http.createServer(app).listen(app.get('port'), function () {
    console.log('Simple Web/REST server');
    console.log('listening on port ' + app.get('port'));
});
*/

//app.set('port', process.env.PORT || 3000);

//var server = app.listen(app.get('port'), function () {
//    debug('Debug Express server listening on port ' + server.address().port);
//});