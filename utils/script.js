const db = require("./connection.js");
const cTable = require("console.table");

const viewAllRoles = function () {
  db.query(
    `
    SELECT roles.id, roles.title, department.dept_name, roles.salary AS salary
    FROM roles
    LEFT JOIN department
    on roles.department_id = department.id;
    `,
    function (err, results) {
      console.log("");
      console.table(results);
    }
  );
};

const viewAllEmployees = function () {
  db.query(
    `
    SELECT employees.id, employees.first_name, employees.last_name, roles.title AS title, department.dept_name AS department, roles.salary AS salary, employees.manager_id AS manager
    FROM employees
    LEFT JOIN roles
    on employees.role_id = roles.id
    LEFT JOIN department
    on roles.department_id = department.id
    `,
    function (err, results) {
      console.log("");
      console.table(results);
    }
  );
};

const viewAllDepartments = function () {
  db.query(
    `SELECT department.id, department.dept_name AS department FROM department`,
    function (err, results) {
      console.log("");
      console.table(results);
    }
  );
};

const addDepartment = function (dept_name) {
  const sql = `INSERT INTO department (dept_name) VALUES (?)`;
  const params = [dept_name];

  db.query(sql, params, (err, result) => {
    if (err) {
      console.log("Department could not be addded.");
      return;
    }
    console.log(`The new department ${dept_name} was added.`);
  });
};

const getManagerId = function (manager) {
  const managerName = manager.split(" ");
  console.log(managerName);
  // console.log(managerName);
  // employees.first_name='${managerName[0]}' AND employees.last_name='${managerName[1]}';`;

  const get_manager_id = `SELECT id FROM employees WHERE first_name=? AND last_name=?`;
  console.log("line 65", get_manager_id);

  const test = db.query(
    get_manager_id,
    [managerName[0], managerName[1]],
    (err, results) => {
      if (err) {
        console.log(`Employee ID of manager ${manager} could not be found!`);
        console.log(err);
      }
      // console.log("inside employee id query", manager_id, result);
      console.log("line 74", results);
      return result.id;
    }
  );

  console.log(test);
  /*
  db.query(
    get_manager_id,
    { first_name: managerName[0] },
    { last_name: managerName[1] },
    function (err, result) {
      console.table(results);
      if (err) {
        console.log(`Employee ID of manager ${manager} could not be found!`);
        console.log(err);
      }
      // console.log("inside employee id query", manager_id, result);
      console.log(result);
      return result.employee_id;
    }
  );*/
  // console.log("Why!!!!", why);
};

const addEmployee = function (first_name, last_name, title, manager) {
  let role_id;
  let manager_id;
  console.log(manager);

  manager_id = getManagerId(manager);

  console.log("line 102", manager_id);
  //  console.log("1", get_manager_id);
  /*
  db.query(
    get_manager_id,
    { first_name: managerName[0] },
    { last_name: managerName[1] },
    function (err, result) {
      if (err) {
        console.log(`Employee ID of manager ${manager} could not be found!`);
        console.log(err);
      }
      // console.log("inside employee id query", manager_id, result);
      console.log(result);
      manager_id = result.employee_id;
    }
  );*/
  //console.log("outside employee id query", manager_id);

  /*
  const get_job_id = `SELECT roles.job_id FROM roles WHERE roles.title='${title}'`;

  job_id = db.query(get_job_id, title, (err, result) => {
    if (err) {
      console.log(`No role found with name of ${title}`);
      return;
    }
    // console.log(result.job_id);
    job_id = result.job_id;
    // console.log("inside job id query", job_id, result);
  });
  */

  console.log("outside job id query", role_id);
  // const sql = `INSERT INTO employees (first_name, last_name, job_id, manager_id) VALUES (?, ?, ?, ?)`;
  const sql = `INSERT INTO employees set ? `;
  const params = [first_name, last_name, role_id, manager_id];
  //console.log(params);
  const values = {
    first_name: first_name,
    last_name: last_name,
    role_id: role_id,
    manager_id: manager_id,
  };
  console.log("Values", values);
  db.query(sql, values, (err, result) => {
    if (err) {
      console.log("Employee could not be addded.");
      return;
    }
    console.log(`The new employee ${first_name} ${last_name} was added.`);
  });
};

const getRoleByName = function (title) {
  const get_job_id = `SELECT roles.id FROM roles WHERE roles.title='${title}'`;

  db.query(get_job_id, title, (err, result) => {
    if (err) {
      console.log(`No role found with name of ${title}`);
    }
    console.log(result[0].id);
    role_id = result[0].id;
    console.log(role_id);
    return result;
  });
};

const getManagerByName = function (fullName) {
  const managerName = fullName.split(" ");
  console.log(managerName);

  const get_manager_id = `SELECT employees.id FROM employees
  WHERE employees.first_name='${managerName[0]}' AND employees.last_name='${managerName[1]}'`;

  db.query(get_manager_id, fullName, (err, result) => {
    if (err) {
      console.log(`Employee ID of manager ${manager} could not be found!`);
      return;
    }
    console.log(result[0].id);
    return result[0].id;
  });
};

const addRole = function (title, salary, department_name) {
  const getDeptById = `SELECT department.id FROM department
    WHERE department.dept_name='${department_name}'`;

  const addRoleSql = `INSERT INTO roles (title, salary, getDeptById) VALUES (?, ?, ?)`;

  params = [title, salary, department_id];
  db.query(addRoleSql, params, (err, result) => {
    console.log(result);
    if (err) {
      console.log("Role could not be addded.");
      return;
    }
    console.log("The new role " + title + " was added.");
  });
};

const getDeptNames = function () {
  const sql = `SELECT department.dept_name FROM department`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log("Department names could not be returned.");
      return;
    }
    console.log(result);
  });
};

module.exports = {
  viewAllRoles,
  viewAllEmployees,
  viewAllDepartments,
  addEmployee,
  addDepartment,
  getDeptNames,
  getRoleByName,
  getManagerByName,
};
