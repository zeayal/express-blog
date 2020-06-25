const express = require('express');
const app = new express();

const port = 1024;

app.get('/', (req, res) => {
  res.send("Hello, this is my blog");
})

app.listen(port, () => {
  console.log(`app is runing in http://localhost:${port}`)
})
