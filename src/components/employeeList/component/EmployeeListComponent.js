import React, { useState, useEffect } from "react";
import "./EmployeeListComponent.scss";
import TableWrapper from "../../common/TableWrapper/TableWrapper";
import Button from "../../common/Button/Button";
import CurrencyFormat from 'react-currency-format';
import ModalFormLayout from "../../../layouts/ModalFormLayout/ModalFormLayout";

const EmployeeListComponent = (props) => {

    const {employees, history, deleteEmployeeByID, deleteError, loadingError, setDeleteError, setLoadingError} = props;
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemDeleteId, setItemDeleteId] = useState(null);

    const handleDelete = (id) =>{
        setShowDeleteModal(true)
        setItemDeleteId(id);
    }

    return (
        <div className="employee-list-wrapper">
            <ModalFormLayout
                title="¿Are you sure you want to delete this employee?"
                show={showDeleteModal}
                submit={() => {
                    deleteEmployeeByID(itemDeleteId)
                    setShowDeleteModal(false);
                    setItemDeleteId(undefined);
                }}
                handleClose={() => {
                    setShowDeleteModal(false);
                    setItemDeleteId(undefined);
                }}
            />
            <div className="add-employee-button-wrapper">
                <Button text={"Add employee"} onPress={()=>history.push("/employee-form")} />
            </div>
            <TableWrapper headers={["Name", "Salary", "Age", "Image", ""]}>
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
                            <td className="element">
                                <img className="delete-icon" onClick={()=>{handleDelete(item.id)}} src={require("../../../assets/bin.png")} alt="" />
                                <img className="delete-icon" 
                                    onClick={()=>{history.push({
                                        pathname: '/employee-form',
                                        state: { employeeToEdit: item }
                                      })}
                                    }
                                    src={require("../../../assets/editPencilIcon.png")} 
                                    alt="" />
                            </td>
                        </tr>
                  )})
                : <div>Loading...</div>}
            </TableWrapper>
            <ModalFormLayout
                title="Error when deleting"
                show={deleteError}
                submit={() => {
                    setDeleteError(false)
                }}
            />
            <ModalFormLayout
                title="Failed to load"
                show={loadingError}
                submit={() => {
                    setLoadingError(false);
                }}
            />    

        </div>
    );
};

export default EmployeeListComponent