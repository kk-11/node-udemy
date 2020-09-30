const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
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
            console.log('chunk: ', chunk)
            body.push(chunk);
        });
        //--- one way to do shit
        // req.on('end', () => {
        //     const parsedBody = Buffer.concat(body).toString();
        //     fs.writeFileSync('message.txt', parsedBody.split('=')[1]); //sync = blocking
        //     console.log(parsedBody);
        // });
        // res.statusCode = 302;
        // res.setHeader('Location', '/')
        // return res.end();
        //--- another way to do shit
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            fs.writeFile('message.txt', parsedBody.split('=')[1], err => {
                res.statusCode = 302;
                res.setHeader('Location', '/')
                return res.end();
            }); //non blocking
        });
        
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Page Title</title></head>');
    res.write('<body>Page body</body>');
    res.write('</html>');
    res.end();
})

server.listen(3000);
