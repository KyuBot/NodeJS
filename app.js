var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.listen(3000, function() {
	console.log("start! express server on port 3000");
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

//url routing
app.get('/', function(req, res) {
	// res.send("<h1>hi friend!</h1>")
	res.sendFile(__dirname + "/public/main.html")
})

app.post('/email_post', function(req, res) {
	console.log(req.body.email)
	// res.send("<h1>welcome !</h1>" + req.body.email)
	res.render('email.ejs', {'email': req.body.email})
})