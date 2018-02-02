import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Layout from 'components/Layout';
import Project from './project';

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path={`/`} component={()=>{return 'plain react + css module'}}/>                
          <Route path={`/project`} component={Project}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
