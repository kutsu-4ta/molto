import React, {useState} from 'react';
import {Route, BrowserRouter, Routes, Link} from "react-router-dom";
import {
    // Breadcrumb,
    // theme,
    ConfigProvider, Avatar, Layout, Menu
} from "antd";

import AccountSetting from "./views/accountSetting/AccountSetting";
import SignUp from "./views/signUp/SignUp";
import SignIn from "./views/signIn/SignIn";
import Home from "./views/home/Home";
import Artist from "./views/artist/Artist";
import NowPlaying from "./views/nowPlaying/NowPlaying";
import {Header} from "antd/es/layout/layout";
import {HomeOutlined, SearchOutlined, TeamOutlined} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";

// 遷移先 TODO: 【低】定数ファイル
const redirectPathToSignUp         = 'signUp';
const redirectPathToSignIn          = 'signIn';
const redirectPathToHome           = 'home';
const redirectPathToArtist         = 'artist';
const redirectPathToNowPlaying     = 'nowPlaying';
const redirectPathToAccountSetting = 'accountSetting';

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
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
            <BrowserRouter>
            {/*<HeaderNav/>*/}
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => {
                    setCollapsed(value);
                }}>
                    {/*<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>*/}
                </Sider>
                <Routes>
                    <Route path={redirectPathToSignUp} element={<SignUp/>}/>
                    <Route path={redirectPathToSignIn} element={<SignIn/>}/>
                    <Route path={redirectPathToHome} element={<Home/>}/>
                    <Route path={redirectPathToArtist} element={<Artist/>}/>
                    <Route path={redirectPathToNowPlaying} element={<NowPlaying/>}/>
                    <Route path={redirectPathToAccountSetting} element={<AccountSetting/>}/>
                </Routes>
            </BrowserRouter>
        </ConfigProvider>
    );
};
export default App;

/**
 * ヘッダーメニューコンポーネント
 */
const HeaderNav = () => {

    const AvatarIcon = () => {
        const UserList = ['User', 'Lucy', 'Tom', 'Edward'];
        const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
        const GapList = [4, 3, 2, 1];

        // 仮
        const color = ColorList[3];
        const user = UserList[0];
        const gap = GapList[0];

        return (
            <Avatar style={{backgroundColor: color, verticalAlign: 'middle'}} size="large" gap={gap}>
                {user}
            </Avatar>
        );
    }

    const headerItems = [
        _generateMenuItem('', 'sub1', <AvatarIcon/>, [
            _generateMenuItem(<Link to={'/profile'}>profile</Link>, '1'),
            _generateMenuItem(<Link to={'/your-works'}>works</Link>, '2'),
            _generateMenuItem(<Link to={'/wip'}>WIP</Link>, '3'),
            _generateMenuItem(<Link to={redirectPathToAccountSetting}>account Setting</Link>, '4'),
        ]),
    ];

    const GuestIcon = () => {
        const color = '#00a2ae';
        const user = 'guest';
        const gap = 2;

        return (
            <Avatar style={{backgroundColor: color, verticalAlign: 'middle'}} size="large" gap={gap}>
                {user}
            </Avatar>
        );
    }

    const loginButton = [
        _generateMenuItem('', 'sub1', <GuestIcon/>, [
            _generateMenuItem(<Link to={'/login'}>SIGN_IN</Link>, '1')
        ]),
    ];

    const isLogin = false;
    return (
        <Header className="header" style={{paddingRight: 10}}>
            <div style={{display: "flex", placeContent: "space-between", height: 65}}>
                <div className="logo" style={{paddingLeft: 30, paddingRight: 30}}>
                <span style={{color: "#a12fff", fontSize: 30}}>
                    Molto
                </span>
                </div>
                <Menu style={{width: '100%', justifyContent: 'right'}} theme="dark" mode="horizontal"
                      items={isLogin ? headerItems : loginButton}/>
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
const _generateMenuItem = (key, icon, children, label) => {
    return (
        {
            key, icon, children, label
        }
    );
};
// const logInMenu = (authentication.uid !== '') ? <a href={'/logout'}>logout</a> : <a href={'/login'}>login</a>;

// サイドメニューの項目
const items = [
    _generateMenuItem(
        <Link to="/home">home</Link>, '1', <HomeOutlined/>),
    _generateMenuItem(<Link to={'/search'}>search</Link>, '2', <SearchOutlined/>),
    _generateMenuItem('Libraries', 'sub2', <TeamOutlined/>, [
        _generateMenuItem(<Link to={'/music-works'}>music</Link>, '3'),
        _generateMenuItem(<Link to={'/art-works'}>art</Link>, '4')
    ]),
];