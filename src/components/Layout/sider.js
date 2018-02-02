import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import config from 'utils/config';
import menu from 'utils/menu';
import styles from './index.module.scss';

const { Sider } = Layout;

const sider = ({collapsed})=>{
  
  return (
    <Sider
      className="sider"
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <Link to="/" className={styles.logo}><img src={config.logo} alt="logo"/></Link>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {
          (menu || []).map((m,i)=>{
            return (
              <Menu.Item key={i}>
                <Link to={m.url}>
                  <Icon type={m.icon} />              
                  <span>{m.name}</span>
                </Link>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </Sider>
  )
}

export default sider