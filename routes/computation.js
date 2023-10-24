var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  ran = Math.random();  
  exp=Math.exp(ran);
  res.render('computation', { title: 'Rishik Reddy Endurthy' });
  res.send(`Exponent function(Math.exp())  applied to ${ran} is ${exp}`)
});

module.exports = router;

var ran=0;
var exp=0;