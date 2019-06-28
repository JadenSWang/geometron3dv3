var express = require('express');
var path = require('path');

var app = express();
var server = app.listen(80, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server loaded on Host: ' + host + ' Port: ' + port);
});

app.get('/', (req, res) => {
	res.sendFile('public/index.html', { root: path.join(__dirname, './') });
});

app.use(express.static('./public'));