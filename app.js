var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var BrainJSClassifier = require('natural-brain');

var app = express();
var classifier = new BrainJSClassifier();
var classifierS = new BrainJSClassifier();
var classifierSS = new BrainJSClassifier();

var classifierPage = require('./classifier.js');
var classifierObj = new classifierPage();

var type = '';

var replies = classifierObj.getIntentCategories();

classifierObj.classifyIntents(classifier, classifierS, classifierSS);

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