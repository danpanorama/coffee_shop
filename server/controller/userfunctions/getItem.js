const Mogoallitems = require("../../models/db/mongoCard");

const getItem = async (req, res, next) => {
  try {
    let whare =req.query.userid|| req.body.userid 
    await Mogoallitems.find(
      { userid: whare },
      function (err, user) {
        if (err) throw err;
        console.log(user)
        req.items= user
        next();
      }
    ).catch((err) => res.json({err:'err bay geting items '+err}));
  } catch (e) {
    res.json({err:'err bay geting items'})
    console.log("error by geting data bay id item add", e);
    res.status(500);
  }
};
module.exports.getItem = getItem;
