var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000; // set our port

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.get('/', function(req, res) {

	res.json({ message: 'hooray! welcome to our api!' });	

});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);