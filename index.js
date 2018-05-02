const http = require('http');

// start the web server
http
  .createServer((request, response) => {
    // send a response to the browser
    response.statusCode(200); // sending http status code ok
    response.setHeader('Content-Type', 'text/plain');
    response.write('<h1>our first node page</h1>');
    response.end('<h2>Ending the response</h2>');
  })
  .listen(process.env.PORT || 5000); // listening to port 3000

// display message in command prompt
console.log('Server running (perhaps on port 5000)');
