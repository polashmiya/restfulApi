/*
 * Title : routes
 * Description :applications all routes
 * Author : Md Polash Miya
 * Date : 13-09-2021
 */

//dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");

const routes = {
  sample: sampleHandler,
};
module.exports = routes;
