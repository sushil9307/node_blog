const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
	user: "root",
	password: "",
	database: "node_blog"
});

module.exports = connection