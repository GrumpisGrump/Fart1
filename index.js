const express = require('express');

const app = express();

onst PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});