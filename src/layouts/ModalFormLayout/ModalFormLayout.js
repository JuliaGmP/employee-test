import React from "react";
import Button from "../..//components/common/Button/Button";
import "./ModalFormLayout.scss";

const ModalFormLayout = (props) => {
    const { children, title, show, handleClose, submit, loading } = props;

    return (
        <div className="modal" style={{display: show? "flex": "none"}}>
            <div className="modal-main">
                <div className="title">{title}</div>
                {children}
                <div style={{float:"right"}}>
                    <div className="buttonsContainer">
                        {handleClose && <div style={{marginRight: 10}}>
                            <Button text="Cancelar" onPress={()=>handleClose()} className='cancel'/>
                        </div>}
                        {submit && <Button loading={loading} type='submit' text="Aceptar" onPress={()=>submit()}/>}
                    </div>
                </div>

            </div>

        </div>
    );
};
export default ModalFormLayout;
