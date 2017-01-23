var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();



app.use(express.static('public'));

app.use(bodyParser.urlencoded({exteneded: true}));



app.get('/', function(req, res) {
res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.post('/calc', function(req, res) {
  console.log(req.body);

  //post request using a switch statement to handle operations
    var operation = req.body.operator;
    var x = Number(req.body.x);
    var y = Number(req.body.y);
    console.log(operation, x, y);
    // fromClient.push(req.body);

    switch (operation) {
      case 'add':
        res.send({result: x+y});
        break;
      case 'subtract':
        res.send({result: x-y});
        break;
      case 'divide':
        res.send({result: x/y});
        break;
      case 'multiply':
        res.send({result: x*y});
        break;
      default:
        res.sendStatus(200);

    }
});


app.listen(3000);
