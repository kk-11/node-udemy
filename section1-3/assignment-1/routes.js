const fs = require('fs');

const requestHandler = (req, res) => {
    if(req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Hi there</title></head>');
        res.write('<body>');
        res.write('<h1>Hey hows it going</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="message"/><button type="submit">Create User</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    };

    if(req.url === '/users') {
        res.write('<html>');
        res.write('<head><title>Page Title</title></head>');
        res.write('<body>');
        res.write('<ul><li>User 1</li>');
        res.write('<li>User 2</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(req.url === '/create-user' && req.method === 'POST') {
        const body = [];
        req.on('data', chunk => body.push(chunk));
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString().split('=')[1];
            console.log(parsedBody)
            res.statusCode = 302;
            res.setHeader('Location', '/users')
            return res.end();
        });
        
    }
}

module.exports = requestHandler;


