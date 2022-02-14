import React, { useState, useEffect } from "react";
import "./EmployeeFormComponent.scss";
import { Field, ErrorMessage } from "formik";
import "./formik.scss";
import Grid from "@material-ui/core/Grid";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../../common/Button/Button";

const EmployeeFormComponent = (props) => {

    const { submit, history, submitError } = props;

    const initialValues = {
        name: "",
        salary: "",
        age: ""
    };

    const schema = Yup.object({
        name: Yup.string().required("Required"),
        salary: Yup.number().required("Required").typeError("Must be a number").min(0, "Must be greater than 0"),
        age: Yup.number().required("Required").typeError("Must be a number").min(0, "Must be greater than 100").max(100, "Must be less than 0"),      
    });

    return (
        <div className="employee-form-wrapper">
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    submit(values)
            }}>
                {(formik) => {
                    return (
                        <div>
                            <div className="formik-input-component">
                                <div className="title-input">Name</div>
                                <div className={`input-container ${formik.touched['name'] && formik.errors['name'] && "error"}`}>
                                    <Field className="input" type={'text'} name={'name'} placeholder={'Add name'}/>
                                </div>
                                <div className="error-message">
                                    <ErrorMessage name={'name'} />
                                </div>
                            </div>  
                            <div className="formik-input-component">
                                <div className="title-input">Salary</div>
                                <div className={`input-container ${formik.touched['salary'] && formik.errors['salary'] && "error"}`}>
                                    <Field className="input" type={'number'} name={'salary'} placeholder={'Add salary'}/>
                                </div>
                                <div className="error-message">
                                    <ErrorMessage name={'salary'} />
                                </div>
                            </div>
                            <div className="formik-input-component">
                                <div className="title-input">Age</div>
                                <div className={`input-container ${formik.touched['age'] && formik.errors['age'] && "error"}`}>
                                    <Field className="input" type={'number'} name={'age'} placeholder={'Add age'}/>
                                </div>
                                <div className="error-message">
                                    <ErrorMessage name={'age'} />
                                </div>
                            </div>    
                            <div className="button-wrapper">
                                <Button className="cancel button" text={"Cancel"} onPress={()=>history.push("/employee-list")}/>
                                <Button type="submit" className="button" text={"Save"} onPress={()=>formik.handleSubmit()}/> 
                            </div>
                            {submitError && <div className="submit-error">Submit error</div>}
                        </div>)
                    }
                }
                      
            </Formik>
        </div>
    );
};

export default EmployeeFormComponent