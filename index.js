const { menu } = require('./utils/prompts.js'); // bring in the prompts
const { viewAllRoles, viewAllEmployees, viewAllDepartments, addEmployee, addDepartment } = require('./utils/script.js'); // bring in the SQL functions
const mysql = require('mysql2');
const db = require('./utils/connection.js');
const inquirer = require('inquirer');
const cTable = require('console.table');
/*
console.log(viewAllEmployees());

console.log(viewAllRoles());

console.log(viewAllDepartments());
*/
console.log(`
 _______________________
|                       |
|   Employee Manager    |
|                       |
|_______________________|

`);

const promptSelection = () => {
    inquirer.prompt(menu).then(selectionData => {

        if (selectionData.mainMenuSelection === 'View All Employees') {

            viewAllEmployees();
            return promptSelection(menu);

        } else if (selectionData.mainMenuSelection === 'Add Employee') {

            return promptSelection(menu);
        } else if (selectionData.mainMenuSelection === 'Update Emplopyee Role') {

            return promptSelection(menu);
        } else if (selectionData.mainMenuSelection === 'View All Roles') {

            viewAllRoles();
            return promptSelection(menu);

        } else if (selectionData.mainMenuSelection === 'Add Role') {


            return promptSelection(menu);

        } else if (selectionData.mainMenuSelection === 'View All Departments') {

            viewAllDepartments();
            return promptSelection(menu);

        } else if (selectionData.mainMenuSelection === 'Add Department') {

            addDepartment(selectionData.newDept);
            return promptSelection(menu);

        } else {
            return process.exit();  // quit was selected if nothing else was so quit
        }
    })
}

promptSelection();