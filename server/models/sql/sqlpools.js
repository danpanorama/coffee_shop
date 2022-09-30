const pool = require("./mysql2");

const selectUser = () => {
  return pool.execute(`SELECT * FROM alma `);
};

const cheakUserEmail = (email) => {
  return pool.execute(
    `SELECT * FROM alma WHERE email = ? `,
    [email]
  );
};
const cheakUserName = (name) => {
  return pool.execute(
    `SELECT * FROM alma WHERE name = ? `,
    [name]
  );
};


// to Restore my password

const cheakUserEmailAndName = (name,email) => {
  return pool.execute(
    `SELECT * FROM alma WHERE name = ? AND email = ? `,
    [name,email]
  );
};






const insertNewUser = 
(name,lastname, password, 
  email, phon,idcard , date,
  passChange,isboss) => {
  return pool.execute(
    `INSERT INTO alma 
    (name,lastname, password, email, 
      phon, id, date,passwoken, isboss) 
    VALUES 
    (?, ?, ?, ?, ?, ?, ?,?,?)`,
    [name,lastname, password, email, phon,idcard, date,passChange,isboss]
  );
};








const selectUserById = (id) => {
  return pool.execute(
    `SELECT * FROM alma  WHERE password = ? `,
    [id]
  );
};
const updateUser = (password, userName, email, phon, view, userID) => {
  return pool.execute(
    `UPDATE alma 
    SET password = ?,
    name =?,email =?,
    phon=?,view=?
    WHERE number = ? `,
    [password, userName, email, phon, view, userID]
  );
};




const updateUserViwe = (view ,number) => {
  return pool.execute(
    `UPDATE alma.user 
    SET view=?
    WHERE number = ? `,
    [view ,number]
  );
};







module.exports.selectUser = selectUser;
module.exports.selectUserById = selectUserById;
module.exports.cheakUserEmail = cheakUserEmail;
module.exports.cheakUserName = cheakUserName;
module.exports.updateUser = updateUser;
module.exports.cheakUserEmailAndName = cheakUserEmailAndName;
module.exports.updateUserViwe = updateUserViwe;
module.exports.insertNewUser = insertNewUser;


