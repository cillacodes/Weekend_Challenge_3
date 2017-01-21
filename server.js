var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

//
app.use(express.static('public'));

app.use(bodyParser.urlencoded({exteneded: true}));

app.get('/', function(req, res) {
res.sendFile(path.join(_dirname, 'public/views/index.html'));
});



app.listen(3000);
