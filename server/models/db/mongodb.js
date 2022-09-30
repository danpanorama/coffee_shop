const { string } = require("joi");
const mongoose = require("mongoose");

const users = new mongoose.Schema({
  foodName: { type: String},
  foodCategory: { type: String},
  isSpaciy:{type:String},
  isVigen: { type: String},
  matirials: { type: String},
  price: { type: Number},
  sum:{type:String},
  image:{type:String}

});

module.exports = mongoose.model("food", users);
 