var mysql = require('mysql');
var password = require('../../config.js');
var Promise = require('bluebird');

Promise.PromisifyAll(mysql);
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: password,
  database: 'chat'
});

connection.connect();

module.exports = connection.queryAsync.bind(connection);


