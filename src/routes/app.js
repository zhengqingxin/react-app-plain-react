import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Layout from 'components/Layout';
import Product from './product';

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
          <Route exact path={`/`} component={()=>{return '121343'}}/>                
          <Route path={`/product`} component={Product}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
