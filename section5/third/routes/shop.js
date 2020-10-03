const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); // or '../views/shop.html'
	//can use '../' or '..' either or
});


module.exports = router;
