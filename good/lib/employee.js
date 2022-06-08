
// Will it work if you comment this out ?? //
const { viewInformation } = require("../option");

function viewEmployee() {
    console.log('view Employeee hit -- redirecting to viewInformation()');
    viewInformation();
}


module.exports = viewEmployee;