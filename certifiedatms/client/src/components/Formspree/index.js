// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import './style.css'

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <div>
                <img src={"https://owips.com/sites/default/files/clipart/drawn-airplane/449847/drawn-airplane-paper-airplane-449847-1423338.jpg"} className="paperAirPlane" alt="paper airplane" />
                <form
                className="form-group"
                    onSubmit={this.submitForm}
                    action="https://formspree.io/mbjjvqzv"
                    method="POST"
                >
                    <h3 id="directions">
                        ~Simply enter your email address and email us your inquiry!
                    </h3>
                    <label>Email:</label>
                    <input 
                    className="form-control" 
                    type="email" name="email" 
                    id="exampleInputEmail1"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    <label>Message:</label>
                    <input 
                    className="space-top form-control "
                    type="text" name="message" />
                    {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </form>
            </div> 
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}