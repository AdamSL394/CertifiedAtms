import React, {Component} from 'react'
import './style.css'

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
           bg:"black",
           email:"black",
           machine:"black"
        }
    }
    changeTextColor=()=>{
        this.setState({
            bg:"purple"
        })
    }
    homepageReload = () => {
        
        window.location.href = "/"
    }

    
    render(){
        return (
            <div id ='navbar'>
                <img className="header" onClick={this.homepageReload} src={"./CertifiedAtmsLogo.png"} alt="Certified Atms Logo"/>
                <span className="tabs" id="home" onClick={() => this.props.changeComponent('LandingPage')} >| Home |</span>
                <span className="tabs" id="email" onClick={() => this.props.changeComponent('Email')}>Email Us |</span>
                <span className="tabs" id="aboutUs" onClick={() => this.props.changeComponent('AboutUs')}> About Us |</span>
                <span className="tabs" id="machine" onClick={() => this.props.changeComponent("Machine")} > ATM Machine Information |</span>
                <span className="tabs" id="employee" onClick={() => this.props.changeComponent("Login")} >Employee |</span>
            </div>
        )
    }
}



export default Navbar;