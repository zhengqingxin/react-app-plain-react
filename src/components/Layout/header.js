import React from 'react';
import { Layout, Icon } from 'antd';
import styles from './index.module.scss';

const { Header } = Layout;

const header = ({ collapsed, toggle }) => {

  return (
    <Header className={styles.header}>
      <Icon
        className={styles.trigger}
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggle}
      />
    </Header>
  )
}

export default header