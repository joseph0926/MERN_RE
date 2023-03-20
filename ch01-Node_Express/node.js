// 1. 서버 생성

import http from "http";
// const http = require("http")

const server = http.createServer((req, res) => {
  console.log("요청 받기");
  console.log(req.method, req.url);

  console.log("응답 보내기");
  if (req.method === "POST") {
    let body = "";
    req.on("end", () => {
      console.log(body);
    });
    req.on("data", (chunk) => {
      body += chunk;
    });
  } else {
    res.setHeader("Content-Type", "text/plain");
    res.end("<form method='POST'><input type='text' name='name'><button type='submit'>createUser</button></form>");
  }
});

server.listen(5000);
