
function viewRole() {

    // How come this works ?? ///
    const { viewInformation } = require('../option');
    console.log('view Role hit -- redirecting to viewInformation()');
    viewInformation();
}

module.exports = viewRole;
