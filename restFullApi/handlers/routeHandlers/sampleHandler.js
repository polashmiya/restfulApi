/*
 * Title : sample handler
 * Description :sample handler
 * Author : Md Polash Miya
 * Date : 13-09-2021
 */

//module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  callback(200, {
    message: "This is a sample request",
  });
};
module.exports = handler;
