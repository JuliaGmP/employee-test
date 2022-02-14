import React, { useState, useEffect } from "react";
import EmployeeFormComponent from "../component/EmployeeFormComponent";
import { addEmployee } from '../../../services/employees'
import { withRouter } from "react-router-dom";

const EmployeeForm = (props) => {
    const [submitError, setSubmitError] = useState(false);

    const submit = async ({ name, salary, age}) => {
        try {
            const employeeData = {
                name: name,
                salary: salary,
                age: age
              };
            let response;
            response = await addEmployee(employeeData);
            console.log(response)
            if(response.status !== "success") throw new Error('Error');
            props.history.push("/employee-list")
        } catch (e) {
            setSubmitError(true)
            console.log('error', e);
            return;        
        }
    };

    return <EmployeeFormComponent submit={submit} history={props.history} submitError={submitError}/>;
};

export default withRouter(EmployeeForm)