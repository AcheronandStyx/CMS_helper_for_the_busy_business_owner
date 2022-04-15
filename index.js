const { menu } = require("./utils/prompts.js"); // bring in the prompts
const mysql = require("mysql2");
const db = require("./utils/connection.js");
const inquirer = require("inquirer");
const Table = require("console.table");

const {
  viewAllRoles,
  viewAllEmployees,
  viewAllDepartments,
  addEmployee,
  addDepartment,
  getDeptNames,
  getRoleByName,
  getManagerByName,
} = require("./utils/script.js"); // bring in the SQL functions

console.log(`
 _______________________
|                       |
|   Employee Manager    |
|                       |
|_______________________|

`);

const promptSelection = () => {
  inquirer.prompt(menu).then((selectionData) => {
    if (selectionData.mainMenuSelection === "View All Employees") {
      viewAllEmployees();
      return promptSelection(menu);
    } else if (selectionData.mainMenuSelection === "Add Employee") {
      addEmployee(
        selectionData.firstName,
        selectionData.lastName,
        selectionData.newEmployeeRole,
        selectionData.newEmployeeMngr
      );
      return promptSelection(menu);
    } else if (selectionData.mainMenuSelection === "Update Emplopyee Role") {
      return promptSelection(menu);
    } else if (selectionData.mainMenuSelection === "View All Roles") {
      viewAllRoles();
      return promptSelection(menu);
    } else if (selectionData.mainMenuSelection === "Add Role") {
      return promptSelection(menu);
    } else if (selectionData.mainMenuSelection === "View All Departments") {
      viewAllDepartments();
      return promptSelection(menu);
    } else if (selectionData.mainMenuSelection === "Add Department") {
      addDepartment(selectionData.newDept);
      return promptSelection(menu);
    } else {
      return process.exit(); // quit was selected if nothing else was so quit
    }
  });
};

promptSelection();
