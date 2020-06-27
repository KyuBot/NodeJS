var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var CORS = require('cors')
var mysql = require('mysql')
var main = require('./router/main')
var email = require('./router/email')


var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '1234',
	database: 'jsman'
})

connection.connect()

app.listen(3000, function() {
	console.log("start! express server on port 3000");
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(CORS())
app.use('/main', main)
app.use('/main', email)


//url routing
app.get('/', function(req, res) {
	// res.send("<h1>hi friend!</h1>")
	res.sendFile(__dirname + "/public/main.html")
})



