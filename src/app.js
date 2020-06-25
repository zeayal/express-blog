const express = require("express");
const app = new express();
const bodyParser = require("body-parser");

// parser application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, this is my blog");
});

// 设置
app.post("/payload", (req, res) => {
  console.log("req.body", req.body);
  res.send(`I got some json: ${req.body.inspect}`);
});

const port = 1024;
app.listen(port, () => {
  console.log(`app is runing in http://localhost:${port}`);
});
