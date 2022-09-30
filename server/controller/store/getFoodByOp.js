const GetAllItem = require("../../models/db/mongodb");

// פה אני מנסה לקבל את המידע שיש לי
const getItem = async (req, res, next) => {


  if (req.params.option ) {
    try {
      await GetAllItem.find(
        {
            foodCategory:req.params.option 
        },
        function (err, user) {
          if (err) throw err;
       req.food = user
       console.log(user)
          next();
        }
      ).catch((err) => console.log(err));
    } catch {
      console.log("error by get query");
      res.status(500);
      next();
    }
  } else {

    try {
      await GetAllItem.find({}, function (err, user) {
        if (err) throw err;
        console.log("not find")
        req.food = user;
        next(); 
      })
    .catch((err) => console.log(err));
    } catch {
      console.log("error by get data");
      res.status(500);
    }



  }
};

module.exports.getItem = getItem;
