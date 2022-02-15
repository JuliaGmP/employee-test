import { endpoints } from "./endpoints";
import fetch from "./fetch"

export async function getEmployees() {
    let response = await fetch(endpoints.getEmployees);       
    return response;
}

export async function getEmployeeDetails(id) {
    let response = await fetch(endpoints.getEmployeeDetails + `/${id}`);       
    return response;
}

export async function addEmployee(employeeData) {
    let response = await fetch(endpoints.createEmployee, "POST", employeeData);
    return response;
}

export async function editEmployee(id, employeeData) {
    console.log(employeeData)
    let response = await fetch(endpoints.updateEmployee + `/${id}`, "PUT", employeeData);
    return response;
}

export async function deleteEmployee(id) {
    let response = await fetch(endpoints.deleteEmployee + `/${id}`, "delete");
    return response;
}
