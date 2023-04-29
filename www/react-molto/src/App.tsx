import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
// アイコン
import {HomeOutlined, LoginOutlined, SearchOutlined, TeamOutlined} from '@ant-design/icons';
// antDesignコンポーネント
import {
    // Breadcrumb,
    // theme,
    ConfigProvider, Avatar, Layout, Menu, type MenuProps
} from "antd";
// ページ群
import Login from "./views/login/_login";
import Home from "./views/home/_home";
import Artist from "./views/artist/_artist";
import NowPlaying from "./views/nowPlaying/_nowPlaying";
import ArtWork from "./views/artWork/_artWork";
import './styles/styles.css';

// 遷移先 TODO: 【低】定数ファイル
const redirectPathToLogin   = '/login';
const redirectPathToHome    = '/home';
const redirectPathToArtist  = '/artist';
const redirectPathToArtWork = '/artWork';
const redirectPathToNowPlaying = '/nowPlaying';

// antDesignコンポーネント
const { Header, Sider, Content, Footer} = Layout;

const App: React.FunctionComponent = () => {
    const [collapsed, setCollapsed] = useState(false);
    // const { token: { colorBgContainer },} = theme.useToken();

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#632fff',
                    colorBgBase: '#ffffff',
                    colorBgContainer: '#ffffff',
                    colorBgLayout: '#000000',
                    colorBgElevated: '#00b96b',
                    colorText: 'rgba(0, 0, 0, 0.88)',
                    colorTextDescription: 'rgba(0, 0, 0, 0.45)',
                    colorTextHeading: 'rgba(0, 0, 0, 0.88)'
                },
                // algorithm: theme.darkAlgorithm, // TODO: 【低】ダークモード対応
            }}
        >
            <Layout>
                <React.StrictMode>
                    <BrowserRouter>
                        <HeaderNav/>
                        <Layout style={{minHeight: '100vh'}}>
                            <Sider collapsible collapsed={collapsed} onCollapse={(value) => {setCollapsed(value);}}>
                                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
                            </Sider>
                            <Layout className="site-layout">
                                {/*
                                <Header style={{padding: 0, background: '#000000FF'}}/>
                                */}
                                <Content style={{margin: '0 16px'}}>
                                    {/* TODO: パンくずリスト【低】
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            */}
                                    <div>
                                        <Routes>
                                            <Route path={redirectPathToLogin} element={<Login/>}/>
                                        </Routes>
                                        <Routes>
                                            <Route path={redirectPathToHome} element={<Home/>}/>
                                        </Routes>
                                        <Routes>
                                            <Route path={redirectPathToArtWork} element={<ArtWork/>}/>
                                        </Routes>
                                        <Routes>
                                            <Route path={redirectPathToArtist} element={<Artist/>}/>
                                        </Routes>
                                        <Routes>
                                            <Route path={redirectPathToNowPlaying} element={<NowPlaying/>}/>
                                        </Routes>
                                    </div>
                                </Content>
                                <Footer style={{textAlign: 'center'}}>Ant Design ©2023 Created by Ant UED</Footer>
                            </Layout>
                        </Layout>
                    </BrowserRouter>
                </React.StrictMode>
            </Layout>
        </ConfigProvider>
  );
};
export default App;

/**
 * ヘッダーメニューコンポーネント
 */
const HeaderNav: React.FunctionComponent = () => {

    // const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    //     key,
    //     label: `nav ${key}`,
    // }));

    const AvatarIcon: React.FunctionComponent = () => {
        const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
        const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
        const GapList = [4, 3, 2, 1];

        // 仮
        const color = ColorList[0];
        const user  = UserList[0];
        const gap   = GapList[0];

        return (
            <Avatar style={{backgroundColor: color, verticalAlign: 'middle'}} size="large" gap={gap}>
                {user}
            </Avatar>
        );
    }

    const headerItems: MenuProps['items'] = [
        _generateMenuItem('', 'sub1', <AvatarIcon/>, [
            _generateMenuItem(<a href={'/profile'}>profile</a>, '1'),
            _generateMenuItem(<a href={'/your-works'}>works</a>, '2'),
            _generateMenuItem(<a href={'/wip'}>WIP</a>, '3'),
            _generateMenuItem(<a href={'/account-setting'}>account Setting</a>, '4'),
        ]),
    ];

    return (
        <Header className="header" style={{paddingRight: 10}}>
            <div style={{display: "flex", placeContent: "space-between", height: 65}}>
                <div className="logo" style={{paddingLeft: 30, paddingRight: 30}}>
                <span style={{color: "#a12fff", fontSize: 30}}>
                    Molto
                </span>
                </div>
                <Menu style={{width: '100%', justifyContent: 'right'}} theme="dark" mode="horizontal" items={headerItems}/>
            </div>
        </Header>
    );
}

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
    _generateMenuItem(<a href={'/login'}>login</a>, '10', <LoginOutlined/>),
];
