const http = require('http');

function requestListener(req, res) {
  // console.log('request', req);
  console.log(req.url, req.method, req.headers);
  // process.exit(); //quits process
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Page Title</title></head>');
  res.write('<body>Page body</body>');
  res.write('</html>');
  res.end();
}

const server = http.createServer(requestListener); //requestListener runs for every request coming into server

server.listen(3000); //loops server on a port
