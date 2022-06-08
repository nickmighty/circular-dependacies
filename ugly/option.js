const inquirer = require('inquirer');
const { viewDept, viewEmployee, viewRole } = require("./lib/index");

// What looks different about this function
viewInformation = () => {

    // implied from index.js
    console.log(checkMeOut);

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
                    "overWriteMe",
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
                case "overWriteMe":
                    init = "lol";
                    console.log('try to go back');
                    viewInformation();
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

doSomething = () => {
    console.log("do something here");
    init()
}

module.exports = {
    viewInformation, doSomething
}
