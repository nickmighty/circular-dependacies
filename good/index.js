const inquirer = require('inquirer');

function init() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "intChoice",
                message: "What would you like to do?",
                choices: [
                    "Employee Options",
                    "Do something",
                    "Quit"
                ]
            }
        ])
        .then(answers => {
            switch (answers.intChoice) {
                case "Employee Options":
                    viewInformation();
                    break;
                case "Do something":
                    doSomething();
                    break;
                case "Quit":
                    console.log("Good bye")
                    break;
                default:
            }
        })
        .catch((error) => {
            // ERROR HERE //
        });
}

init();

module.exports = init;

// init is exported before importing these files 
// Why ?? -->> Look at option.js, it requires init() for these functions
// at the top..
// 
const { viewInformation, doSomething } = require("./option");
