const bcrypt = require("bcryptjs");

exports.getSalt = str => {
  return bcrypt.getSalt(str);
};

exports.hashPass = (pass, salt) => {
  return bcrypt.hashSync(pass, salt);
};
