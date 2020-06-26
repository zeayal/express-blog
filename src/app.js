const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const child_process = require('child_process');

// parser application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, this is my blog");
});

// 设置
app.post("/payload", (req, res) => {
  console.log("req.body", req.body);
  child_process.exec('cd .. && bash ./deploy.sh')
  res.send(`I got some json: ${req.body.inspect}`);
});

const port = 1024;
app.listen(port, () => {
  console.log(`app is runing in http://localhost:${port}`);
});
