var express = require('express');
var router = express.Router();
const tokenmidd = require("../middleware/token")
const setItem = require("../controller/store/insertFood")
const getItem = require("../controller/store/getAllmenu")
const deleteItem = require("../controller/store/deletFood")
const update = require("../controller/store/updateFood")
const getbyoption = require("../controller/store/getFoodByOp")







router.get('/', function(req, res, next) {
 
});

router.get('/getMenue',getItem.getMenu, function(req, res, next) {
  console.log(req.body)
 res.json({menu:req.menu})
});

router.get('/getoption/:option',getbyoption.getItem, function(req, res, next) {
  res.json({data:req.food})
 
});

router.post('/set',setItem.inseretFood,  function(req, res, next) {

  console.log(req.body)
  });


  router.post('/delete/:id',tokenmidd.tryGetIn,deleteItem.deleteMenuFood,  function(req, res, next) {
    res.json({ok:"ok",token:req.token})
  
    });


  router.post('/update',update.updatingItem,  function(req, res, next) {
res.json({massage:"update secsses"})
    });

module.exports = router;
