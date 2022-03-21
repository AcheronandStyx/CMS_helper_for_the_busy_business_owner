const { menu } = require('./utils/prompts.js'); // bring in the prompts
const { viewAllRoles, viewAllEmployees, viewAllDepartments } = require('./utils/script.js'); // bring in the SQL functions
const mysql = require('mysql2');
const db = require('./utils/connection.js');


console.log(viewAllEmployees());

console.log(viewAllRoles());

console.log(viewAllDepartments());

console.log(`
 _______________________
|                       |
|   Employee Manager    |
|                       |
|_______________________|

`);

