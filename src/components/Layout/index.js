import React, { Component } from 'react';
import { Layout } from 'antd';
import Sider from './sider';
import Header from './header';
import styles from './index.module.scss';
const { Content } = Layout;

class PageLayout extends Component {
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
      <Layout className={styles.layout}>
        <Sider {...this.state}/>
        <Layout>
          <Header {...this.state} toggle={this.toggle} />
          <Content className={styles.content}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default PageLayout;
