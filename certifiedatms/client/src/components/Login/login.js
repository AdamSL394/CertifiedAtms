import React, { Component } from "react"
import "./style.css"
import LoginButton from '../LoginButton'
import Actions from "../../utils/API";
import SignupButton from "../SignupButton";

class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            local_pw: "",
            new: false,
        }
    }

    handleSubmitAuth = (e) => {
        if (this.refs.submitForm.reportValidity()) {
            e.preventDefault();
            const userData = {
                email: this.state.email,
                local_pw: this.state.local_pw
            }

            let loginOrSignup = e.currentTarget.textContent
            loginOrSignup = loginOrSignup.toLowerCase();
            console.log(loginOrSignup)

            loginOrSignup === "sign up" ? this.handleSignUp(userData) : this.handleSignIn(userData)
        }
    }
    handleSignUp = (userData) => {
        this.setState({
            new: true
        })
        Actions.handleSignUp(userData)
            .then(response => this.validateRes(response))
            // let pass = response.data.success
            // .then(response => {
            //     this.validateRes(response)
            // })
            .catch(err => console.log("err", err));
    }
    handleSignIn = (userData) => {
        Actions.handleSignIn(userData)
            .then(response => this.validateRes(response))
            .catch(err => console.log('err', err));
    };
    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }
    validateRes = (response) => {
        if (response.data.success) {
            this.setState({
                isLoggedIn: response.data.success,
                errorMsg: "",
                errClassName: ""
            });
            window.location.href = "/"
        }
        else {
            this.setState({
                loading: false,
                errorMsg: `UH-OH!
                ${response.message}
                `,
                errClassName: "error"
            })
        }
        console.log("logged in state", this.state.isLoggedIn)
    }

    render() {
        return (
            <div id="formoutline">
                <h5 id="employeeLoginFont">Employee Login</h5>
                <form ref="submitForm" id='formOutline'>
                    <div id='centering'>
                        <input
                            className="login"
                            id="emailInput"
                            placeholder="Email"
                            required={true}
                            name="email"
                            placeholder="Email"
                            onChange={this.handleInputChange}>
                        </input>
                        <input
                            className="login"
                            id="passwordInput"
                            placeholder="Password"
                            required={true}
                            name="local_pw"
                            type="password"
                            onChange={this.handleInputChange}>
                        </input>
                    </div>
                    <LoginButton
                        class='buttons'
                        id='login'
                        handleBtnClick={this.handleSubmitAuth}
                    > Login
                </LoginButton>
                    <SignupButton
                        id="signup"
                        class='buttons'
                        handleBtnClick={this.handleSubmitAuth}>Sign Up
                </SignupButton>
                </form>
            </div>

        );
    }
}

export default login;