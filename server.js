const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "homePage.html";
      break;
    case "/about":
      path += "ourServices.html";
      break;
    default:
      path += "contactUs.html";
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
      res.end(data);
    }
  });
});
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000 ");
});
