const db = require('./connection.js');

const viewAllRoles = function () {
    return db.query(`
    SELECT roles.job_id, roles.title, department.dept_name, roles.salary AS salary
    FROM roles
    LEFT JOIN department
    on roles.department_id = department.dept_id;
    `, function (err, results) {
        console.log(results);
    })
};

const viewAllEmployees = function () {
    return db.query(`
    SELECT employees.employee_id, employees.first_name, employees.last_name, roles.title AS title, department.dept_name AS department, roles.salary AS salary, employees.manager_id AS manager
    FROM employees
    LEFT JOIN roles
    on employees.role_id = roles.job_id
    LEFT JOIN department
    on roles.department_id = department.dept_id
    `, function (err, results) {
        console.log(results);
    })
};

const viewAllDepartments = function () {
    return db.query(`SELECT * FROM department`, function (err, results) {
        console.log(results);
    })
};



module.exports = { viewAllRoles, viewAllEmployees, viewAllDepartments }

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