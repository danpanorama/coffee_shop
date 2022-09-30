var express = require('express');
var router = express.Router();

const update = require("../controller/store/updateFood")
const tokenMiddelware = require("../middleware/token")
const getItem = require('../controller/userfunctions/getItem')
const addItem = require('../controller/userfunctions/addItem')
const delItem = require('../controller/userfunctions/delete')
const deleteall = require('../controller/userfunctions/deleteall')








// router.get('/',tokenMiddelware.tryGetIn,getItem.getItem, function(req, res, next) {
 
// });

router.get('/get',getItem.getItem, function(req, res, next) {
  
    res.json({massage:"get",items:req.items})
});

  router.post('/additem',tokenMiddelware.tryGetIn,addItem.addNewCardItem,  function(req, res, next) {
res.json({massage:"add item secssec",result:req.result})
    });

    router.post('/deleteitem',tokenMiddelware.tryGetIn,delItem.deleteItems,  function(req, res, next) {
      res.json({massage:"delete item secssec"})
          });


          router.post('/deletalleitem',tokenMiddelware.tryGetIn,deleteall.deleteAllItems,  function(req, res, next) {
            res.json({massage:"delete all items secssec"}) });
module.exports = router;
