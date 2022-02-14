
const BASE_URL = "http://dummy.restapiexample.com/api/v1";

export const endpoints = {

    getEmployees: BASE_URL + '/employees', // Get all employee data Details
    getEmployeeDetails: BASE_URL + '/employee', // + {id} Get a single employee data Details
    createEmployee: BASE_URL + '/create', // Create new record in database Details
    updateEmployee: BASE_URL + '/update', // + {id} Update an employee record Details
    deleteEmployee: BASE_URL + '/delete' // + {id} Delete an employee record Details

};
