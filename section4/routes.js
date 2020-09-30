const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    };

    if(url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            fs.writeFile('message.txt', parsedBody.split('=')[0], err => {
                res.statusCode = 302;
                res.setHeader('Location', '/')
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Page Title</title></head>');
    res.write('<body>Page body</body>');
    res.write('</html>');
    res.end();
}

module.exports = {
    handler: requestHandler,
    someHardCodedText: 'hard coded text lol'
};

