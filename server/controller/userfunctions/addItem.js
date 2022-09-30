const SetMyItem = require("../../models/db/mongoCard");

const fs = require("fs");
const path = require("path");

const addNewCardItem = async (req, res, next) => { 
  try {
    const setItem = await new SetMyItem({
        userid: req.body.user.number,
        foodarray:  req.body.data,

    });
    setItem
      .save()
      .then((result) => {
          req.result=result
        next();
      })
      .catch((err) => console.log(err));
  } catch (e) {
    console.log( e);
    res.json({err:"error while edit item"});
  }
};

module.exports.addNewCardItem = addNewCardItem;
