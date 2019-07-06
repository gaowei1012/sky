const bcrypt = require('bcryptjs')

exports.getSalt = (str) => {
  let salt = bcrypt.genSaltSync(str)
  return salt
}