const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(
      `<html>
         <head>
          <title>Form</title>
         </head>
       <body>
         <form method="post" action="/process">
         <input name="message"/>
         <button style="cursor:pointer" type="submit">Submit</button>
         </form>
        </body>
      </html>`
    );
    res.end();
  } else if (req.url === "/process" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      console.log("stream finished");
      const parseBody = Buffer.concat(body).toString();
      //res.write(parseBody)
      res.write("Thanks for  Submitting!");
      res.end();
    });
  } else {
    res.write("not found");
    res.end();
  }
});
server.listen(3000);
console.log("server is running......");

const fs = require("fs");
const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/newTxt.txt`);

//one way  ##
ourReadStream.on("data", (chunk) => {
  ourWriteStream.write(chunk);
});
//another way  ##
//ourReadStream.pipe(ourWriteStream)
