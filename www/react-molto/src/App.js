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
import './styles/styles.css';
import {
    AntDesignOutlined,
    AudioOutlined, AuditOutlined,
    DesktopOutlined, FileOutlined,
    HomeOutlined,
    SearchOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import SubMenu from "antd/es/menu/SubMenu";

// 遷移先 TODO: 【低】定数ファイル
const redirectPathToSignUp         = 'signUp';
const redirectPathToSignIn         = 'signIn';
const redirectPathToHome           = 'home';
const redirectPathToArtist         = 'artist';
const redirectPathToNowPlaying     = 'nowPlaying';
const redirectPathToAccountSetting = 'accountSetting';

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

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
                <Layout>
                    <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                        <div style={{display: "flex", placeContent: "space-between", height: 65}}>
                            <div className="logo" style={{paddingLeft: 30, paddingRight: 30}}>
                                <span style={{color: "#a12fff", fontSize: 30}}>
                                    Molto
                                </span>
                            </div>
                            <Menu theme="dark" mode="horizontal">
                                <SubMenu key="UserIcon" icon={<AvatarIcon/>} title="">
                                    <Menu.Item key="1"><Link to={'/profile'}>Profile</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to={'/your-works'}>Works</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to={'/wip'}>WIP</Link></Menu.Item>
                                    <Menu.Item key="4"><Link to={redirectPathToAccountSetting}>AccountSetting</Link></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                    </Header>
                    <Layout className="site-layout" style={{paddingTop: 70}}>
                        <Sider collapsible collapsed={collapsed} onCollapse={(value) => {
                            setCollapsed(value);
                        }}>
                            <div className="logo"/>
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                <Menu.Item key="1" icon={<HomeOutlined/>}><Link to={'/home'}>Home</Link></Menu.Item>
                                <Menu.Item key="2" icon={<SearchOutlined/>}><Link to={'/search'}>Search</Link></Menu.Item>
                                <SubMenu key="sub1" icon={<TeamOutlined/>} title="Libraries">
                                    <Menu.Item key="3" icon={<AudioOutlined/>}><Link to={'/music'}>Music</Link></Menu.Item>
                                    <Menu.Item key="4" icon={<AntDesignOutlined/>}><Link to={'/art'}>Art</Link></Menu.Item>
                                </SubMenu>
                                <Menu.Item key="5" icon={<AuditOutlined/>}><Link to={'/nowPlaying'}>NowPlaying</Link></Menu.Item>
                            </Menu>
                        </Sider>
                        <Routes>
                            <Route path={redirectPathToSignUp} element={<SignUp/>}/>
                            <Route path={redirectPathToSignIn} element={<SignIn/>}/>
                            <Route path={redirectPathToHome} element={<Home/>}/>
                            <Route path={redirectPathToArtist} element={<Artist/>}/>
                            <Route path={redirectPathToNowPlaying} element={<NowPlaying/>}/>
                            <Route path={redirectPathToAccountSetting} element={<AccountSetting/>}/>
                        </Routes>
                    </Layout>
                </Layout>
            </BrowserRouter>
        </ConfigProvider>
    );
};
export default App;