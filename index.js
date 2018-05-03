const http = require('http');

const PORT = process.env.PORT || 5000;

// start the web server
http
  .createServer((request, response) => {
    // send a response to the browser
    response.statusCode = 200; // sending http status code ok
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>our first node page</h1>');
    response.end('<h2>Ending the response</h2>');
  })
  .listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
