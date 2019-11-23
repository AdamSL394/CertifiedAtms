import React from "react";
import './style.css'


const SignupButton = (props) => (
    <button id="loginButton" className='btn signUp'  onClick={props.handleBtnClick}> {props.children} </button> 
);

export default SignupButton;