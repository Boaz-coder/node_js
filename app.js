// const amount = 80;

// if (amount < 100) {
//   console.log(`The amount is less than 100`);
// } else {
//   console.log(`The amount is more than 100`);
// }

// console.log(`This is my first node app`);

// HTTP

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to Dennsoft Technologies Home Page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }

  res.end(
    `<h1>Ooops</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/" >Back to homepage</a>
    `
  );
});

server.listen(5000);
