import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import App from './app';
import Login from './login';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" render={props => <App  {...props}/>} />          
      </Switch>
    );
  }
}

export default Routes;
