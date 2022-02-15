import React, { useState, useEffect } from "react";
import EmployeeListComponent from "../component/EmployeeListComponent";
import { getEmployees, deleteEmployee } from '../../../services/employees'
import { withRouter } from "react-router-dom";

const EmployeeList = (props) => {

    const [employees, setEmployees] = useState(false);
    const [deleteError, setDeleteError] = useState(false);
    const [loadingError, setLoadingError] = useState(undefined);

    useEffect(() => {
        getEmployeesData()
    }, []);

    const getEmployeesData = async () =>{
        try{
            const response = await getEmployees();
            if(response.status !== "success") throw new Error(response.statusText);
            setEmployees(response.data)
        }
        catch(e){
            setLoadingError(e)
            console.log('error', e);
            return;
        }
    }

    const deleteEmployeeByID = async (id) => {
        try{
            const response = await deleteEmployee(id)
            if(response.status !== "success") throw new Error(response.statusText);
            setEmployees(employees.filter((item) => item.id !== id))
        } 
        catch(e){
            setDeleteError(true)
            console.log('error', e);
            return;
        }
    }


    return <EmployeeListComponent 
        employees={employees} 
        history={props.history} 
        deleteEmployeeByID={deleteEmployeeByID}
        deleteError={deleteError}
        setDeleteError={setDeleteError}
        loadingError={loadingError}
        setLoadingError={setLoadingError}
        />;
};

export default withRouter(EmployeeList);
