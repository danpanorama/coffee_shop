const GetAllMenu= require("../../models/db/mongodb");

// פה אני מנסה לקבל את מספר המקומות במערך כדי לעשות פאגינאטיאון
const getMenu = async (req, res, next) => {
    try {
      // let data =
      await GetAllMenu.find({}, function (err, user) {
        if (err) throw err;
   
        req.menu = user;
        next();
      }).catch((err) => console.log(err));
    } catch {
      console.log("error by get data");
      res.status(500);
    }
  
};

module.exports.getMenu = getMenu;
