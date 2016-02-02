var http = require('http');

var PORTGOOD = 7000;
var PORTBAD = 7500;

var requestHandlerGood = function(req, res) {
	res.end("You're a star! " + req.url);
};

var serverGood = http.createServer(requestHandlerGood);

serverGood.listen(PORTGOOD, function() {
	console.log("Server is listening at http://localhost:%s", PORTGOOD);
});

var requestHandlerBad = function(req, res) {
	res.end("You're absolutely disgusting! " + req.url);
}

var serverBad = http.createServer(requestHandlerBad);

serverBad.listen(PORTBAD, function() {
	console.log("Server is listening at http://localhost:%s", PORTBAD);
})