const { viewInformation } = require("../option");

function viewEmployee() {
    console.log('view Employeee hit -- redirecting to viewInformation()');
    viewInformation();
}


module.exports = viewEmployee;