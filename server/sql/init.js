const mysql = require('mysql')
const config = require('../config')


const Pool = mysql.createPool({
  host: config.sql.host,
  user: config.sql.user,
  password: config.sql.password,
  database: config.sql.database
})

// 封装query方法
// sql 查询语句
// values 
let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    Pool.getConnection(function(err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = { query }