var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "buhFuh69",
  database: "office_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
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
        "Add an Employee",
        "Remove an Employee",
        "Update Employee Role",
        "Add Role",
        "Exit Application"
      ]
    }).then(function ({start}) {
      switch (task) {
        case "List Employees":
          listEmployees();
          break;
      
        case "exit":
          connection.end();
          break;
      }
    })
}