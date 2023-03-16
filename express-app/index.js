const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h2>hello there!!!</h2>');
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
