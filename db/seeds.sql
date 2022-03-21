INSERT INTO department (dept_name)
VALUES
('Service'),
('Accounting'),
('Human Resources'),
('IT');

INSERT INTO roles (title, salary, department_id)
VALUES
('Accountant', 65000, 2),
('HR Analyst', 50000, 3),
('Help Desk Analyst', 45000, 4),
('Technician', 43000, 1),
('Service Manager', 70000, 1);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Al", "Dole", 5, NULL),
("Anne", "Yates", 4, 5),
("Nicola", "Yurtz", 3, NULL),
("Ron", "Sad", 2, NULL),
("Rico", "Suave", 1, NULL);
