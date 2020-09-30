const http = require('http');
const fs = require('fs');

// const routes = require('./routes');
const { handler, someHardCodedText } = require('./routes');
console.log(someHardCodedText);

const server = http.createServer(handler);

server.listen(3000);
