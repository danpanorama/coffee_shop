const setFood = require("../../models/db/mongodb");
const path = require("path");
const fs = require("fs");


const inseretFood = async (req, res, next) => {
  var set;
  try {

  
    let set = {
        foodName: req.body.foodName,
        foodCategory: req.body.foodCategory,
        isSpaciy:req.body.isSpaciy,
        isVigen: req.body.isVigen,
        matirials:req.body.matirials,
        price: req.body.price,
        sum:0,
        image:req.body.image
    }

      const setMenueItem = await new setFood(set);
      setMenueItem
        .save()
        .then( (result) => {
              console.log(result,"you enter a new item",result)
              res.json({ok:"you inseret a new food menu",id:result._id}).status(201);
        })
        .catch((err) => res.status(500));
  
  } catch (e) {
    console.log("error while edit menue item", e);
    res.json({err:"error while edit menue item", e});
  }
};

module.exports.inseretFood = inseretFood;
