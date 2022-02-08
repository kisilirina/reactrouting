import React from 'react';
import { Layout, Menu } from 'antd';
import './Header.css'
import { Link } from "react-router-dom";
const { Header } = Layout;

export const HeaderComponent: React.FC = () => {
return (
<Header className="header">
                  <div className="logo" />
                  <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                    <Link className="nav-link" to="/">HOME</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                    <Link className="nav-link" to="/docs">DOCS</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                     <Link className="nav-link" to="/download">DOWNLOAD</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                                         <Link className="nav-link" to="/development">DEVELOPMENT</Link>
                    </Menu.Item>
                  </Menu>
                </Header>
                )
}