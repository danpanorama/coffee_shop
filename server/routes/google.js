var express = require('express');
var router = express.Router();
const login = require('../controller/register/google/login')


        router.get('/', function(req, res, next) {
        
        });  
      
        router.post('/login',login.logedin,  function(req, res, next) {});


      
  

module.exports = router;
