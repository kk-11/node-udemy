// const http = require('http'); dont need with express :)

const express = require('express');
const app = express();

// part 1
//-------------
// app.use((req, res, next) => {//next needs to be run
// 	console.log('in middleware')
// 	next();
// });// function will be applied to every incoming request

// app.use((req, res, next) => {//next needs to be run
// 	console.log('in another middleware', req.url)
// 	res.send('<h1>From express</h1>');//new express utility function(default respnse = text/html)
// });// function will be applied to every incoming request
//------------
// part 2
//-------------


app.use('/add-product', (req, res, next) => {
	//if you're calling send you probably won't be calling next
	res.send('<h1>From express</h1>');
});

// const server = http.createServer(app); dont need with express :)

app.listen(3000); // same as server.listen(3000);
