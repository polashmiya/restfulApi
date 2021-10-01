/*
 * Title :not found handler
 * Description :404 not found  handler
 * Author : Md Polash Miya
 * Date : 13-09-2021
 */

//module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "url not found",
  });
};
module.exports = handler;
