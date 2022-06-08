
// notice me //
const { viewInformation } = require('../option');

function viewEmployee() {

    // How come this doesn't work ??? //
    console.log("view Employeee hit -- redirecting to questions().. PS this option work");
    viewInformation();
}


module.exports = viewEmployee;