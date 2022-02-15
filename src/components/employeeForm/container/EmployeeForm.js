import React, { useState, useEffect } from "react";
import EmployeeFormComponent from "../component/EmployeeFormComponent";
import { addEmployee, editEmployee } from '../../../services/employees'
import { withRouter } from "react-router-dom";

const EmployeeForm = (props) => {
    const [employeeToEdit, setEmployeeToEdit] = useState(undefined);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(props.location.state)setEmployeeToEdit(props.location.state.employeeToEdit)
    }, [props.location]);

    const [submitError, setSubmitError] = useState(false);

    const submit = async ({ name, salary, age}) => {
        setLoading(true)
        try {
            const employeeData = {
                name: name,
                salary: salary,
                age: age
              };
            let response;
            if(employeeToEdit) {
                response = await editEmployee(employeeToEdit.id, employeeData);
                console.log(response)
            } else {
                response = await addEmployee(employeeData);
            }
            if(response.status !== "success") throw new Error(response.statusText);
            setEmployeeToEdit(undefined)
            props.history.push("/employee-list")
        } catch (e) {
            setSubmitError(e)
            console.log('error', e);
        }
        setLoading(false)
    };

    return <EmployeeFormComponent loading={loading} submit={submit} history={props.history} submitError={submitError} employeeToEdit={employeeToEdit}/>;
};

export default withRouter(EmployeeForm)