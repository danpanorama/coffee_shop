const deleteall = require("../../models/db/mongoCard");

const deleteItems = async (req, res, next) => {
    try {
      await deleteall.deleteOne({
        $and:[
           { _id: req.body.id},{userid:req.body.userid },
        ]},
       
        function (err, item) {
          if (err) throw err;
          console.log('deleted')
          next();
        }
      );
      next(

      )
    } catch {
      res.json({err:"errrererer"});
    }
  } 



module.exports.deleteItems = deleteItems;
