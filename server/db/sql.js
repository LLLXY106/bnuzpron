var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456lu',
  database: 'mydb_web'
});

module.exports = connection;
