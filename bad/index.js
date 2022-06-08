const inquirer = require('inquirer');

// notice where this import is compared to the one in "good" //
const { viewInformation, doSomething } = require("./option");

// Try using "<-- Go back" //

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