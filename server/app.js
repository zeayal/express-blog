const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const child_process = require("child_process");
const githubWebhook = require("./middleware/githubWebhook");

// app use pug template
app.set("view engine", "pug");
app.set("views", "server/views");
// parser application/json
app.use(bodyParser.json());
// use static files
app.use(express.static('server/public/static'));

app.get("/", (req, res) => {
  res.render("index", { title: "博客", message: "hello there" });
});

// 设置
app.post("/payload", githubWebhook, (req, res) => {
  console.log("接收到webHook请求", Date.now());
  child_process.exec(
    "bash deploy.sh",
    { cwd: "/data/express-blog" },
    (error, stdout, stderr) => {
      if (error) {
        res.send(
          `I got error:${JSON.stringify(error)}, stderr:${JSON.stringify(
            stderr
          )}`
        );
      } else {
        // ${req.body.inspect}
        res.send(`I got some json: ${stdout} & stderr: ${stderr}`);
      }
    }
  );
});

const port = 1024;
app.listen(port, () => {
  console.log(`app is runing in http://localhost:${port}`);
});
