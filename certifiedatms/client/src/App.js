import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserRoutes from './routes/UserRoutes'
import GuestRoutes from './routes/GuestRoutes'
import Actions from "./utils/API"

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }

  

  componentDidMount() {
    console.log("inital state",this.state.isLoggedIn)
    this.checkAuth()
  }

  checkAuth(req,res) {
    Actions.checkAuth(req,res)
      // .then(response => {
      //   console.log(response)
      //   this.setState({
      //     isLoggedIn: response.ok
      //   })
      // })
      // .then(data => {
      //   console.log("data",data)
      // })
      .then(data => {
        this.setState({
          isLoggedIn: data.data
        })
      })
  }


  UserRoutes = () => {
    return (
      <Router>
        <div>
          <div className="content">
            <Switch>
              <Route path="*" component={UserRoutes} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

  Employeeroutes = () => {
    return (
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path="/" component={GuestRoutes} />
              <Route exact path="/account" component={GuestRoutes} />
              <Route path="/account/*" component={GuestRoutes} />
              <Route path="/profile" component={GuestRoutes} />
              <Route path="/profile/*" component={GuestRoutes} />
              <Route path="/employee" component={GuestRoutes} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }


  render() {
    switch (this.state.isLoggedIn) {
      case false:
        return this.UserRoutes()
      case true:
        return this.Employeeroutes()
      default:
        return this.UserRoutes()
    }
  }
}


export default App;
