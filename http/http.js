const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Developer.");
    res.write("How are you doing?");
    res.end();
  } else if (req.url === "/about") {
    res.write("this is about page");
    res.end();
  } else {
    res.write("not found");
    res.end();
  }
});
server.listen(3000);
console.log("server is running......");
