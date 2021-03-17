var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

const employee = require("./classes/employee");
const department = require("./classes/department");
const role = require("./classes/role");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "BuhFuh69",
  database: "office_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
  inquirer
    .prompt({
      name: "start",
      type: "list",
      message: "Welcome to CLI Employee Tracker. How would you like to start?",
      choices: [
        "List Employees",
        "List Employees by Department",
        "List Employees by Role",
        "Add an Employee",
        "Add a Department",
        "Add Role",
        "Update Employee Role",
        "Add Role",
        "Exit"
      ]
    }).then(function ({ start }) {
      switch (start) {
        case "List Employees":
          listEmp();
          break;
        case "List Employees by Department":
          listDept();
          break;
        case "List Employees by Role":
          listRoles();
          break;
        case "Add an Employee":
          addEmp();
          break;
        case "Add a department":
          addDept();
          break;
        case "Add Role":
          addRole();
          break;
        case "Update Employee Role":
          updateEmp();
          break;
        case "Exit":
          connection.end();
          break;
      }
    })
}

function listEmp() {
  console.log("Viewing employees:")

  connection.query(
    "SELECT * from office_DB.employee",
    function (err, res) {
      if (err) throw err;

      console.table(res);
      start();
    }
  );
};

function listDept() {
  console.log("Viewing departments:")

  connection.query(
    "SELECT * from office_DB.department",
    function (err, res) {
      if (err) throw err;

      console.table(res);
      start();
    }
  );
}

function listRoles() {
  console.log("Viewing roles:")

  connection.query(
    "SELECT * from office_DB.role",
    function (err, res) {
      if (err) throw err;

      console.table(res);
      start();
    }
  );
}

function addEmp() {

  const addEmpQ = [
    {
      type: "input",
      message: "Employee's first name",
      name: "first_name"
    },
    {
      type: "input",
      message: "Employee's last name",
      name: "last_name"
    },
    {
      type: "number",
      message: "Employee's role",
      name: "role_id"
    },
    {
      type: "number",
      message: "Employee's manager ID",
      name: "manager_id"
    }
  ];

  inquirer.prompt(addEmpQ).then(function (answer) {
    // console.table(answer);

    connection.query("INSERT INTO employee SET ?", answer)
  })
}



function updateEmp() {
  connection.query(
    "SELECT * from office_DB.employee",
    function (err, res) {
      if (err) throw err;

      console.table(res);
    }
  );

  inquirer.prompt([
    {
      type: "number",
      message: "Select employee by ID to update",
      name: "empIDSelect"
    },
    {
      type: "number",
      message: "Select role you want to assign to employee",
      name: "empRoleSelect"
    }
  ]).then(function (answer) {
    connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [answer.empRoleSelect, answer.empIDSelect], function (err, res) {
      if (err) throw err;
      start();
    })
  })

}

