import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/user", (req, res, next) => {
  res.send("<h1>asdf</h1>");
});

app.use((req, res, next) => {
  let body = "";
  req.on("end", () => {
    console.log(body);
    next();
  });
  req.on("data", (chunk) => {
    body += chunk;
  });
});

app.get("/", (req, res, next) => {
  res.send("<form method='POST'><input type='text' name='name'><button type='submit'>createUser</button></form>");
});

app.listen(3000);
