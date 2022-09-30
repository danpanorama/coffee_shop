var express = require('express');
var router = express.Router();
const login = require('../controller/register/login')
const tokenmidd = require('../middleware/token')


router.get('/', function(req, res, next) {
 
});


  router.post('/tokenverifay', tokenmidd.tryGetIn, function(req, res, next) {
      res.json({token:req.token})

  });

  

module.exports = router;
