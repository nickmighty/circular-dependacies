const { viewInformation } = require("../option");

function viewRole() {
    console.log('view Role hit -- redirecting to viewInformation()');
    viewInformation();
}


module.exports = viewRole;
