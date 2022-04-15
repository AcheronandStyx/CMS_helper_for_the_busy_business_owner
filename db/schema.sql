DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE department (
    dept_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30)
);

CREATE TABLE roles (
    job_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30), -- role title
    salary DECIMAL, -- roles salary with a decimal
    department_id INTEGER, -- to hold reference to department role belongs to
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(dept_id) ON DELETE SET NULL -- If dept is deleted set the department_id of associated roles to NULL
);

CREATE TABLE employees (
    employee_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER, -- to hold reference to employee role
    manager_id INTEGER, -- to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(job_id) ON DELETE SET NULL -- If that role is deleted the employee no longer has a listed role
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(employee_id) ON DELETE SET NULL -- If managing employee is removed then remove their id from any direct reports line
);