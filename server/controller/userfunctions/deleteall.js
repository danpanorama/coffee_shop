const deleteall = require("../../models/db/mongoCard");

const deleteAllItems = async (req, res, next) => {
    try {
      await deleteall.deleteMany({
          userid:req.body.userid 
        },
       
        function (err, item) {
          if (err) throw err;
          console.log('deleted all')
          next();
        }
      );
      next( )
    } catch {
      res.json({err:"errrererer"});
    }
  } 



module.exports.deleteAllItems = deleteAllItems;
