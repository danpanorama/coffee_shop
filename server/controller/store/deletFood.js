const deleteall = require("../../models/db/mongodb");


const deleteMenuFood = async (req, res, next) => {
    try {
        console.log(req.params)
      await deleteall.deleteOne(
        { _id: req.params.id },
        function (err, item) {
          if (err) throw err;
          console.log("deletes")
          next();
        }
      );
    } catch {
      console.log("dident deleted item");
      res.json({err:"errrererer"});
    }

};



module.exports.deleteMenuFood = deleteMenuFood;

