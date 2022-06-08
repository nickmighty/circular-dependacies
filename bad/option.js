const inquirer = require('inquirer');

// notice where this import is compared to the one in "good" //
const { viewDept, viewEmployee, viewRole } = require("./lib/index");
const init = require('./index.js');

function viewInformation() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "intChoice",
                message: "What would you like to do?",
                choices: [
                    "View Department",
                    "View Role",
                    "View Employee",
                    "<--- Go back"
                ]
            }
        ])
        .then(answers => {
            switch (answers.intChoice) {
                case "View Department":
                    viewDept();
                    break;
                case "View Role":
                    viewRole();
                    break;
                case "View Employee":
                    viewEmployee();
                    break;
                case "<--- Go back":
                    init();
                default:
            }
        })
        .catch((error) => {
            // ERROR HERE //
        });
}

function doSomething() {
    console.log("do something here");
    init()
}

module.exports = {
    viewInformation, 
    doSomething
}

