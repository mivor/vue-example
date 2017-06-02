import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

router.get('/', function(req, res) {

	res.json({ message: 'hooray! welcome to our api!' });	

});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);