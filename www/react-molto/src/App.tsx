import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './styles/styles.css';
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined,} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, type MenuProps, theme } from "antd";
import Login from "./views/login/_login";
import Home from "./views/home/_home";
import MyPage from "./views/myPage/_myPage";

const { Header, Sider, Content, Footer} = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const App: React.FunctionComponent = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
              <Layout style={{minHeight: '100vh'}}>
      <React.StrictMode>
          <BrowserRouter>
                      <header className="App-header">
                      </header>
                  <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                      <div style={{height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)'}}>
                          <h1>Molto</h1>
                      </div>
                      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
                  </Sider>
                  <Layout className="site-layout">
                      <Header style={{padding: 0, background: colorBgContainer}}/>
                      <Content style={{margin: '0 16px'}}>
                          <Breadcrumb style={{margin: '16px 0'}}>
                              <Breadcrumb.Item>User</Breadcrumb.Item>
                              <Breadcrumb.Item>Bill</Breadcrumb.Item>
                          </Breadcrumb>
                          <div style={{padding: 24, minHeight: 360, background: colorBgContainer}}>
                              Bill is a cat.
                          </div>
                          <Routes>
                              <Route path="/login" element={<Login/>}/>
                          </Routes>
                          <Routes>
                              <Route path="/home" element={<Home/>}/>
                          </Routes>
                          <Routes>
                              <Route path="/myPage" element={<MyPage/>}/>
                          </Routes>
                      </Content>
                      <Footer style={{textAlign: 'center'}}>Ant Design ©2023 Created by Ant UED</Footer>
                  </Layout>
          </BrowserRouter>
          </React.StrictMode>
              </Layout>
  );
};
export default App;

