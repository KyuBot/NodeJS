var express = require('express')
var app = express()
var router = express.Router();
var path = require('path')


router.get('/', function(req, res) {
	// res.send("<h1>hi friend!</h1>")
	res.sendFile(path.join(__dirname, "../public/main.html"))
})

module.exports = router;