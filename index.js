const http = require('http');

// start the web server
const server = http
  .createServer((request, response) => {
    // send a response to the browser
    response.statusCode = 200; // sending http status code ok
    response.setHeader('Content-Type', 'text/plain');
    response.write('<h1>our first node page</h1>');
    response.end('<h2>Ending the response</h2>');
  })
  .listen(process.env.PORT, () => {
    console.log('Server running');
  });
