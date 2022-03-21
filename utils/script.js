const db = require('./connection.js');

const viewAllRoles = function () {
    return db.query(`SELECT * FROM roles`, function (err, results) {
        console.log(results);
    })
};

const viewAllEmployees = function () {
    return db.query(`SELECT * FROM employees`, function (err, results) {
        console.log(results);
    })
};

const viewAllDepartments = function () {
    return db.query(`SELECT * FROM department`, function (err, results) {
        console.log(results);
    })
};



module.exports = { viewAllRoles, viewAllEmployees, viewAllDepartments }