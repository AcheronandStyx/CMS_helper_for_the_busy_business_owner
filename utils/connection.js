const mysql = require('mysql2');

// connect to the employees db and export it be accessed wherever

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'AppleDapple978#',
        database: 'hr_db'
    },
    console.log(`connect to the emnployees db`)
);

module.exports = db;