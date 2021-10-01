/*
 * Title : handle request and response
 * Description :handle request and response
 * Author : Md Polash Miya
 * Date : 13-09-2021
 */

//dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routess");
const {
  notFoundHandler,
} = require("../handlers/routeHandlers/notFoundHandler");

//app object ---module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  //request handle
  //get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;
  const decoder = new StringDecoder("utf-8");
  let realData = "";
  const requestProperties = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headersObject,
    decoder,
  };
  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;
  chosenHandler(requestProperties, (statusCode, payload) => {
    statusCode = typeof statusCode === "number" ? statusCode : "500";
    payload = typeof payload === "object" ? payload : {};
    const payloadString = JSON.stringify(payload);
    res.writeHead(statusCode);
    res.end(payloadString);
  });
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });
  req.on("end", () => {
    realData += decoder.end();
    //response handle
    res.end("hello programmers!");
  });
};
module.exports = handler;
