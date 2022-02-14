import React, { useState, useEffect } from "react";
import EmployeeListComponent from "../component/EmployeeListComponent";
import { getEmployees } from '../../../services/employees'
import { withRouter } from "react-router-dom";

const EmployeeList = (props) => {

    const [employees, setEmployees] = useState(false);

    useEffect(() => {
        getEmployeesData()
    }, []);

    const getEmployeesData = async (tenantID) =>{
        try{
            const response = await getEmployees();
            if(response.status !== "success") throw new Error('Error');
            setEmployees(response.data)
        }
        catch(e){
            console.log('error', e);
            return;
        }
    }


    return <EmployeeListComponent employees={employees} history={props.history}/>;
};

export default withRouter(EmployeeList);
