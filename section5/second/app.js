const express = require('express');
const parser = require('body-parser');

const app = express();

app.use(parser.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
	//this always runs
	next();
});

app.use('/add-product', (req, res, next) => {
	res.send('<form action="/product" method="POST"><input type="text" name="title"/><button>Submit</button></form>');
});

app.post('/product', (req, res, next) => { //app.get() only fires on get requests and post()
	console.log(req.body) //doesn't automatically parse hence require('body-parser');
	res.redirect('/');
});

app.use('/', (req, res, next) => {
	res.send('<h1>Hi</h1>');
	next();
});

//double call coming from favicon
app.listen(3000);
