var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var BrainJSClassifier = require('natural-brain');

var app = express();
var classifier = new BrainJSClassifier();
var classifierS = new BrainJSClassifier();
var classifierSS = new BrainJSClassifier();

// Classifier
var replies = {
	'greeting':'Hello, How can I assist you?',
	'loan': 'Loans are available for home, car',
	'interest': 'car 10%, home 8%',
	'payment': 'can be opted with 6, 12 or 24 months'
	
};
var type = '';

classifier.addDocument('Hi Hello how are you hey', 'greeting');
classifier.addDocument('loan process', 'loan');
classifier.addDocument('interest rates mortgage', 'interest');
classifier.addDocument('elgibility how much amount tenure', 'payment');
classifier.addDocument('what elgibility criteria loan', 'payment');


classifier.train();

//type = classifier.classify('for 12 months what is interest rate');

//console.log(type,replies[type]);


// Server
//app.use(express.bodyParser());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/submit-message', function(req, res){
	type = classifier.classify(req.body.message);
	res.json({inputMessage:req.body.message, replyMessage:replies[type]});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});