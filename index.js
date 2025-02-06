const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

require('dotenv').config()

const config = {
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvian: process.env.IS_KALVIAN === 'true',
};

// console.log(config)

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
  // res.send(config)
});

app.get('/env', (req, res) => {
  res.send(config)
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
