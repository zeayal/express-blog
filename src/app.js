const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const child_process = require('child_process');

// parser application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, this is my blog test webhook 3");
});

// 设置
app.post("/payload", (req, res) => {
  console.log("req.body", req.body);
  child_process.exec('bash ./deploy.sh', {cwd: "/data/express-blog"}, (error, stdout, stderr) => {
    if(error || stderr) {
      res.send(`I got error:${JSON.stringify(error)}, stderr:${JSON.stringify(stderr)}`);
    } else {
      // ${req.body.inspect}
      res.send(`I got some json: ${stdout}`);
    }

  })
  
});

const port = 1024;
app.listen(port, () => {
  console.log(`app is runing in http://localhost:${port}`);
});
