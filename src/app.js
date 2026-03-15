const express = require('express');
const cors = require('cors');
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(config.port, () => {
  console.log(`Listening to http://localhost:${config.port}`);
});
