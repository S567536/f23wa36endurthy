var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  ran = Math.random();  
  exp=Math.exp(ran);
  res.render('computation', { title: 'Rishik Reddy Endurthy' });
  res.send(`Number is :${ran} and the exponent is ${exp}`)
});

module.exports = router;

var ran=0;
var exp=0;