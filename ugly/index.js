
// Will it work with "use strict" ?? 
// "use strict";

const inquirer = require('inquirer');
const { viewInformation, doSomething } = require("./option");

// This variable is used in viewInformation(), can we access it there? will it crash
// if declared using const/var/let ? 
checkMeOut = "I am implied global variable";

// What looks different about this function
// What happens if you use "const/var/let when you use "<--- Go back" ?" 
init = () => {
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




