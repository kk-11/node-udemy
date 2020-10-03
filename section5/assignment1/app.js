const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
	console.log('/users middleware')
	res.send('<h1>Users</h1>');
	//don't call next you fucking idiot.
});

app.use('/', (req, res, next) => {
	console.log('/ middleware')
	res.send('<h1>Home</h1>');
});


//double call coming from favicon
app.listen(3000);
