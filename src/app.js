const express = require('express');
const cors = require('cors');
const config = require('./config');
const router = require('./routes');
require('./config/database');
const path = require('path');
const globalErrorMiddleware = require('./middlewares/globalError.middleware');

const app = express();

app.use(cors());
app.use(express.json());

const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.use('/api', router);

app.use(globalErrorMiddleware);

app.listen(config.port, () => {
  console.log(`Listening to http://localhost:${config.port}`);
});
