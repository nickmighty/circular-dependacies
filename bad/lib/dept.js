const { viewInformation } = require("../option");

function viewDept() {
    console.log('view Department hit -- redirecting to viewInformation()');
    viewInformation();
}

module.exports = viewDept;