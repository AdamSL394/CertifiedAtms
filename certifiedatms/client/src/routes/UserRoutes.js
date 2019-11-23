import React, { Component } from 'react';
import {Route, Switch }from 'react-router-dom';

import Profile from '../pages/User/Profile.js'

class UserRoutes extends Component {
    render (){
        return(
            <Switch>
                <Route exact path="*" component={Profile}/>
                <Route exact path="/home" component={Profile}/>
            </Switch>
        )
    }
}

export default UserRoutes 