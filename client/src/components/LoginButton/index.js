import React from "react";
import './style.css'

const LoginButton = (props) => (
    <button id="loginButton" className={`btn ${props.float}`} onClick={props.handleBtnClick}> {props.children} </button> 
);

export default LoginButton;