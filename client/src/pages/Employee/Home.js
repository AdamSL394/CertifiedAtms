import React ,{Component} from 'react'
 import Actions from "../../utils/API"


 class Guest extends Component {
     constructor(props){
         super (props)
        this.state = {
            isLoggedIn: false
        }
     }

    logout = () => {
        Actions.handleLogout()
            .then(response => {
                this.setState({
                    isLoggedIn: response.data
                })
                console.log(response.data)
                window.location.href = "/"
        })
            .catch(err => console.log('err',err))
    }

    render (){
     return (
            <div>
               <p>You are logged in </p>
               <button onClick ={this.logout}> Logout </button>
            </div>
     )
    } 
        
}
export default Guest;