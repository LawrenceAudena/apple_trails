const express = require('express'),
    path = require('path'),
    dotenv = require('dotenv').config(),
    hiking = require('./DPR_Hiking.json'),
    request= require('request'),
    bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => {
	res.render('index');
});
app.get('/search', (req, res, next) => {
	res.render('search');
});

app.post('/locations', (req, res, next) => {
	 var userInput = req.body.parkName;
	 //var results= JSON.parse(userInput);
	 console.log(userInput);
	res.redirect('locations');
});

app.get('/locations', (req, res) =>{

	res.render('locations',{hikingTrails: hiking});
	//input url inside quotations
	// request('', (err, response, body) =>{
	// 	if(!err && response.statusCode === 200){
	// 		console.log('something went wrong');
	// 		console.log(err);
	// 	}
	// 	console.log(body);
	// });
});




const port = 8080;
app.listen(process.env.PORT || port, function(){
	console.log('server started ' + port)
});