const menuBass = require("../../models/db/mongodb");
const fs = require("fs");
const path = require("path");

const updatingItem = async (req, res, next) => {
  console.log(req.body,"update")
  let where = { _id: req.body.id };
 
  let set = {
    foodName: req.body.foodName,
    foodCategory: req.body.foodCategory,
    isSpaciy:req.body.isSpaciy,
    isVigen: req.body.isVigen,
    matirials: req.body.matirials,
    price: req.body.price,
    sum:req.body.sum,
    image:req.body.image
  }


  try {
    // let itemsInData =
    await menuBass.findOneAndUpdate(where, set, function (err, user) {
      if (err) throw err;

      console.log(" update seccses");
      next();
    }).catch((err) => console.log(err));
  } catch (e) {
    console.log("error by updating item", e);
    res.status(500);
  }
};
module.exports.updatingItem = updatingItem;
