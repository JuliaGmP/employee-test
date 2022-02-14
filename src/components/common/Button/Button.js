import React from "react";
import "./button.scss";

const ButtonComponent = (props) => {
    const { text, onPress, disabled, type, loading, className, useDiv, icon } = props;

    return (
        <button className={`button-component ${disabled && "disable"} ${className}`} onClick={(e) => onPress && onPress(e)} disabled={disabled || loading} type={type} style={props.style}>
            <div style={{paddingRight:10, paddingLeft:10, alignItems:"center", display:"flex", justifyContent:"center"}}>
                { icon && <img className="icon" src={require("../../../assets/" + icon)} alt="" />}
                {text}
            </div> 
        </button>
    );
};

export default ButtonComponent;
