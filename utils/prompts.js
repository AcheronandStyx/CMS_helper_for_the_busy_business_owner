const mysql = require("mysql2");
const db = require("./connection.js");
const {
  viewAllRoles,
  viewAllEmployees,
  viewAllDepartments,
  addEmployee,
  addDepartment,
  getDeptNames,
} = require("./script.js"); // bring in the SQL functions

const depts = ["Service", "Accounting", "Human Resources", "IT"];

const menu = [
  {
    type: "list",
    name: "mainMenuSelection",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Emplopyee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
      "Quit",
    ],
  },
  {
    type: "input",
    name: "newDept",
    message: "What is the name of the department?",
    when(answers) {
      // only if Add Department is selected
      return answers.mainMenuSelection === "Add Department";
    },
  },
  {
    type: "input",
    name: "newRole",
    message: "What is the name of the role?",
    when(answers) {
      // only if Add Role is selected
      return answers.mainMenuSelection === "Add Role";
    },
  },
  {
    type: "input",
    name: "newRoleSalary",
    message: "What is the salary of the role?",
    when(answers) {
      // only if Add Role is selected
      return answers.mainMenuSelection === "Add Role";
    },
  },
  {
    type: "list",
    name: "newRoleDept",
    message: "What department does the role belong to?",
    choices: depts, // return the deparment names somehow
    when(answers) {
      // only if Add Role is selected
      return answers.mainMenuSelection === "Add Role";
    },
  },
  {
    type: "input",
    name: "firstName",
    message: "What is the emplopyee's first name?",
    when(answers) {
      // only if Add Employee is selected
      return answers.mainMenuSelection === "Add Employee";
    },
  },
  {
    type: "input",
    name: "lastName",
    message: "What is the emplopyee's last name?",
    when(answers) {
      // only if Add Employee is selected
      return answers.mainMenuSelection === "Add Employee";
    },
  },
  {
    type: "list",
    name: "newEmployeeRole",
    message: "What is the employee's role?", // need to add dynamic retrieval from db
    choices: [
      "Accountant",
      "HR Analyst",
      "Help Desk Analyst",
      "Technician",
      "Service Manager",
    ],
    when(answers) {
      // only if Add Employee is selected
      return answers.mainMenuSelection === "Add Employee";
    },
  },
  {
    type: "list",
    name: "newEmployeeMngr",
    message: "Who is the employee's manager?", // need to add dynamic retrieval from db - None is always an option and then all employees
    choices: ["Al Dole", "Anne Yates", "Nicola Yurtz", "Ron Sad", "Rico Suave"],
    when(answers) {
      // only if Add Employee is selected
      return answers.mainMenuSelection === "Add Employee";
    },
  },
  {
    type: "list",
    name: "selectedEmployee",
    message: "Which employee' role do you want to update?", // need to dyanmically list all employees
    choices: ["Al Dole", "Anne Yates", "Nicola Yurtz", "Ron Sad", "Rico Suave"],
    when(answers) {
      // only if Add Employee is selected
      return answers.mainMenuSelection === "Update Emplopyee Role";
    },
  },
  {
    type: "list",
    name: "updateEmployeeRole",
    message: "Which role do you want to addign the selected employee?",
    choices: [
      "Accountant",
      "HR Analyst",
      "Help Desk Analyst",
      "Technician",
      "Service Manager",
    ], // dynamically list the possible roles
    when(answers) {
      // only if Add Employee is selected
      return answers.mainMenuSelection === "Update Emplopyee Role";
    },
  },
];

module.exports = { menu };

/*
['View All Employees',      -> seven column tbale employee_id, firstname, lastname, title, department, salary, manager
'Add Employees',            -> launchs add employee questions, ends with confirmation message of "Added Jon Doe to the database"
'Update Emplopyee Role',    -> launches update role questions, ends with confirmation ""
'View All Roles',           -> four column table id, title, department, salary
'Add Role',                 -> launchs add role questions, ends with confirmation message of "Updates Employee's Role"
'View All Departments',     -> Two column table id & name
'Add Department',           -> new question
'Quit']*/
