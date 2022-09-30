var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({msg:'well done'})
});


router.get('/activ', function(req, res, next) {
  res.json({msg:'well done'})
});
module.exports = router;
