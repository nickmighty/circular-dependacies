
// Will it work if you comment this out ?? //
const { viewInformation } = require("../option");

function viewDept() {
    console.log('view Department hit -- redirecting to viewInformation()');
    viewInformation();
}

module.exports = viewDept;