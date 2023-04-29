import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
// アイコン
import {HomeOutlined, LoginOutlined, SearchOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';
// antDesignコンポーネント
import {
    // Breadcrumb,
    Layout, Menu, type MenuProps, theme
} from "antd";
// ページ群
import Login from "./views/login/_login";
import Home from "./views/home/_home";
import MyPage from "./views/myPage/_myPage";
import './styles/styles.css';

// antDesignコンポーネント
const { Header, Sider, Content, Footer} = Layout;

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
                    <Sider collapsible collapsed={collapsed} onCollapse={(value) => { setCollapsed(value); }}>
                        <div style={{height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)'}}>
                            <h1>Molto</h1>
                        </div>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
                    </Sider>
                    <Layout className="site-layout">
                        <Header style={{padding: 0, background: colorBgContainer}}/>
                        <Content style={{margin: '0 16px'}}>
                            {/* TODO: パンくず未実装
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            */}
                            <div style={{padding: 24, minHeight: 360, background: colorBgContainer}}>
                                <Routes>
                                    <Route path="/login" element={<Login/>}/>
                                </Routes>
                                <Routes>
                                    <Route path="/home" element={<Home/>}/>
                                </Routes>
                                <Routes>
                                    <Route path="/myPage" element={<MyPage/>}/>
                                </Routes>
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Ant Design ©2023 Created by Ant UED</Footer>
                    </Layout>
                </BrowserRouter>
            </React.StrictMode>
        </Layout>
  );
};
export default App;

/**
 * サイドメニューの項目を生成する
 * @param label    ラベル
 * @param key      インデックスキー
 * @param icon     アイコン
 * @param children 子項目
 */
type MenuItem = Required<MenuProps>['items'][number];
const _generateMenuItem = (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem => {
    return (
        {
            key, icon, children, label
        }
    );
};
// サイドメニューの項目
const items: MenuItem[] = [
    _generateMenuItem(<a href={'/home'}>home</a>, '1', <HomeOutlined />),
    _generateMenuItem(<a href={'/search'}>search</a>, '2', <SearchOutlined />),
    _generateMenuItem('Libraries', 'sub2', <TeamOutlined />, [
        _generateMenuItem(<a href={'/music-works'}>music</a>, '3'),
        _generateMenuItem(<a href={'/art-works'}>art</a>, '4')
    ]),
    _generateMenuItem('Profile', 'sub1', <UserOutlined />, [
        _generateMenuItem(<a href={'/profile'}>profile</a>, '5'),
        _generateMenuItem(<a href={'/your-works'}>yourWorks</a>, '6'),
        _generateMenuItem(<a href={'/wip'}>WIP</a>, '8'),
        _generateMenuItem(<a href={'/account-setting'}>account Setting</a>, '9'),
    ]),
    _generateMenuItem(<a href={'/login'}>login</a>, '10', <LoginOutlined/>),
];
