// /back/bd.js
var mysql = require('mysql');
var util = require('util');


var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// Promisify Pool Query para usar async/await
pool.query = util.promisify(pool.query);

module.exports = pool;