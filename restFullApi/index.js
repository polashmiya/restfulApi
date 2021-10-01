/*
 * Title : Uptime Monitoring Aplication
 * Description :Creating a Rest ful Api with raw node js
 * Author : Md Polash Miya
 * Date : 13-09-2021
 */

//dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");

//app object ---module scaffolding
const app = {};

//configuration
app.config = {
  port: 3000,
};

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening on ${app.config.port}`);
  });
};

//hanlde Requests and Response
app.handleReqRes = handleReqRes;

//start server
app.createServer();
