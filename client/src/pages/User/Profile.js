import React, { Component } from 'react'
import LandingPage from '../../components/LandingPage'
import Navbar from "../../components/Navbar"
import Container from "../../components/Container"
import EmailForm from "../../components/Email"
import Login from "../../components/Login"
import AboutUs from '../../components/AboutUs'
import Formspree from '../../components/Formspree'

const components = {
    "LandingPage":<LandingPage/>,
    "AboutUs": <AboutUs />,
    "Email": <Formspree />,
    "Machine": <Container/>,
    "Login":<Login/>
}

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: false,
            whichComponentToShow: 'Home'
        }
    }
   
    showComponent=(componentName)=> {
        this.setState({whichComponentToShow: componentName});
      }

    render() {
        return (
            <div>
                <Navbar changeComponent={this.showComponent} 
                whatToshow={this.state.whichComponentToShow} 
                emailForm={this.emailForm} 
                homeContents={this.homeContents}
                >
                </Navbar >
                <div>
                    {components[this.state.whichComponentToShow]}
                </div>
            </div>
        )
    }
}
export default Home;