var express = require('express');
var router = express.Router();
 const weatherchack = require('../controller/weathercatcher/weather')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({msg:'welcome'})
});

router.get('/weather',weatherchack.checkPrice, function(req, res, next) {
  
});

module.exports = router;
