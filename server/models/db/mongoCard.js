const { string, object } = require("joi");
const mongoose = require("mongoose");

const users = new mongoose.Schema({
    userid: {type:String},
    foodarray:  [{}],
    

});

module.exports = mongoose.model("order", users);
 