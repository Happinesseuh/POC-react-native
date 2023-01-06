const mysql = require('mysql2');
require('dotenv').config();

var db_con = mysql.createConnection({
	host     : process.env.MYSQL_HOST,
	user     : process.env.MYSQL_USER,
	password : process.env.MYSQL_ROOT_PASSWORD,
	database : process.env.MYSQL_DATABASE
});

db_con.connect((err) => {
    if (err) {
      console.log("[DATABASE] Database connection failed.", err);
    } else {
      console.log("[LOG] Database connection succeed.");
    }
});

module.exports = db_con;