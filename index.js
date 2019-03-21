const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json('Hello');
})

app.listen(process.env.PORT || port, () => {
  console.log(`Running on port ${port}`);
})