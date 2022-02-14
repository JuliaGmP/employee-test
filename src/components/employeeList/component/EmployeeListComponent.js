import React, { useState, useEffect } from "react";
import "./EmployeeListComponent.scss";
import TableWrapper from "../../common/TableWrapper/TableWrapper";
import Button from "../../common/Button/Button";
import CurrencyFormat from 'react-currency-format';

const EmployeeListComponent = (props) => {

    const {employees, history} = props;

    return (
        <div className="employee-list-wrapper">
            <Button text={"Add employee"} onPress={()=>history.push("/employee-form")} />
            <TableWrapper headers={["Name", "Salary", "Age", "Image", "", ""]}>
            {employees && employees.length > 0
                ? employees.map( (item, i) => {
                    return(
                        <tr key={i}>
                            <td className="element clickable" onClick={()=>{}}>{item.employee_name}</td>
                            <td className="element">
                                <CurrencyFormat value={item.employee_salary} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </td>
                            <td className="element">{item.employee_age}</td>
                            <td className="element">{item.profile_image}</td>
                            <td className="element"><img className="delete-icon" onClick={()=>{}} src={require("../../../assets/bin.png")} alt="" /></td>
                            <td className="element"><img className="delete-icon" onClick={()=>{}} src={require("../../../assets/editPencilIcon.png")} alt="" /></td>
                        </tr>
                  )})
                : <div>Loading...</div>}
            </TableWrapper>    

        </div>
    );
};

export default EmployeeListComponent