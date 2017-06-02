import express from 'express';
import bodyParser from 'body-parser';

import registerBearController from './controllers/bear-controller';

const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

registerBearController(router);

router.get('/', (req, res) => res.json({ message: 'Bear API running!' }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);
app.listen(port);
console.log(`Magic happens on port ${port}`);
