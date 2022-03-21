const db = require('./connection.js');
const cTable = require('console.table');

const viewAllRoles = function () {
    db.query(`
    SELECT roles.job_id, roles.title, department.dept_name, roles.salary AS salary
    FROM roles
    LEFT JOIN department
    on roles.department_id = department.dept_id;
    `, function (err, results) {
        console.log('');
        console.table(results);
    })
};

const viewAllEmployees = function () {
    db.query(`
    SELECT employees.employee_id, employees.first_name, employees.last_name, roles.title AS title, department.dept_name AS department, roles.salary AS salary, employees.manager_id AS manager
    FROM employees
    LEFT JOIN roles
    on employees.role_id = roles.job_id
    LEFT JOIN department
    on roles.department_id = department.dept_id
    `, function (err, results) {
        console.log('');
        console.table(results);
    })
};

const viewAllDepartments = function () {
    db.query(`SELECT department.dept_id, department.dept_name AS department FROM department`, function (err, results) {
        console.log('');
        console.table(results);
    })
};

const addDepartment = function (dept_name) {
    const sql = `INSERT INTO department (dept_name) VALUES (?)`
    const params = [dept_name]

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log('Department could not be addded.');
            return;
        }
        console.log('The new department ' + dept_name + ' was added.')

    })
};

const addEmployee = function (first_name, last_name, role, manager) {

};

const addRole = function (title, salary, department_id) {

};



module.exports = { viewAllRoles, viewAllEmployees, viewAllDepartments, addEmployee, addDepartment }

    // SQL to return table of role_id, job title, dept name, salary

/*
`
SELECT roles.job_id, roles.title, department.dept_name, roles.salary AS salary
FROM roles
LEFT JOIN department
on roles.department_id = department.dept_id;

`
// SQL for all employees
`
SELECT employees.employee_id, employees.first_name, employees.last_name, roles.title AS title, department.dept_name AS department, roles.salary AS salary, employees.manager_id AS manager
FROM employees
LEFT JOIN roles
on employees.role_id = roles.job_id
LEFT JOIN department
on roles.department_id = department.dept_id
LEFT JOIN employees
on employees.manager_id = employees.employee_id;

`*/