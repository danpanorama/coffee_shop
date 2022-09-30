const users = require("../../../models/sql/sqlpools");
const authbcrypt = require("../../../auth/bcrypt");
const jwtPass = require("../../../auth/jwtpass");

const jwt = require("../../../auth/jwt");
const localStorage = require("localStorage");

// this is logg in function
const logedin = async (req, res, next) => {
    try {
       
       let date = new Date;
       let data = req.body
       console.log(data)
       localStorage.setItem("isRemember",'true');
       let findEmail = await users.cheakUserEmail(req.body.email);
       


        if(findEmail[0].length > 0){
            let hash = await authbcrypt.hashPassport(data.googleId);
            let chekTokens = await jwt.makeToken({ hash: data.googleId, });   
            let passChange = await jwtPass.makeToken({ hash: hash })

            let user = await users.cheakUserEmail(data.email)
            res.json({number:user[0][0].number
                ,userInfo:user[0][0],token:chekTokens,
                tokenTime:passChange
                ,remember:true});

        }


        let hash = await authbcrypt.hashPassport(data.googleId);
        let chekTokens = await jwt.makeToken({ hash: data.googleId, });   
        let passChange = await jwtPass.makeToken({ hash: hash })
        let isboss = 'no'

        let insertToBigBase = await users.insertNewUser(
            data.givenName,
            data.familyName,
            hash,
            data.email,
            'none',
            data.googleId,
            date,
            passChange,
            isboss
          );

                    if (insertToBigBase) {
                        let user = await users.cheakUserEmail(data.email)
                        
                        res.json({number:user[0][0].number
                            ,userInfo:user[0][0],token:chekTokens,
                            tokenTime:passChange
                            ,remember:true});

                    }


        

    } catch (e) {
      console.log( e.message);
      res.json({err:e.message});
    }

};


module.exports.logedin = logedin;
