USE office_DB;

INSERT INTO department (name)
VALUES ("Accounting");

INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO department (name)
VALUES ("Management");

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Bean Counter", 150000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Paralegal", 125000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Team Lead", 250000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ann", "Nonymous", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bill", "Guy", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Reel", "Persohn", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Earl", "Gray", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Charls", "Charge", 5, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Greg", "Goodbody", 2, null);
