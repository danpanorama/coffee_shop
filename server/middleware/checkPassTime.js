const jwt = require("../auth/jwtpass");

const tryGetIn = async (req, res, next) => {
    try {
        console.log(req.body,"your token")
     let pass =   await jwt.chekingToken(req.body.token);
     if(pass){
         res.json({token:req.body.token})
     }
     else{
         res.json({err:"no tokens"})
     }
  
    
    } catch (e) {
      res.json({err:"no token to pass",notoken:e})
  } 
};

module.exports.tryGetIn = tryGetIn;
