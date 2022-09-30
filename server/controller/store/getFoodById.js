const Mogoallitems = require("../../models/db/mongodb");

const findItemThatAdd = async (req, res, next) => {
  try {

    await Mogoallitems.find(
      { _id: req.params.itemID },
      function (err, user) {
        if (err) throw err;
        req.dicvar = user[0];
        next();
      }
    ).catch((err) => console.log(err));
  } catch (e) {
    console.log("error by geting data bay id item add", e);
    res.status(500);
  }
};
module.exports.findItemThatAdd = findItemThatAdd;
