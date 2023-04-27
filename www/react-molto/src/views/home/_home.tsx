import React, {useState} from 'react';
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined,} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Col, Row  } from 'antd';
import './_home_style.css';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return (
        {
        key,
        icon,
        children,
        label,
        }
    )
}

// サイドメニュー
const items: MenuItem[] = [
    getItem('Home', '1', <PieChartOutlined />),
    getItem('WIP', '2', <DesktopOutlined />),
    getItem('Profile', 'sub1', <UserOutlined />, [
        getItem('account', '3'),
        getItem('discography', '4'),
        getItem('setting', '5'),
    ]),
    getItem('Follows', 'sub2', <TeamOutlined />, [
        getItem('Follows', '6'),
        getItem('Followers', '8')
    ]),
    getItem('artWork', '9', <FileOutlined />),
];

const App: React.FunctionComponent = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout className="site-layout sider-bg}">
                <MoltoSider itemsProps={items} ></MoltoSider>
                <MoltoContent></MoltoContent>
            </Layout>
        </Layout>
    );
};
export default App;

/**
 * コンテンツ
 * @constructor
 */
const MoltoContent: React.FunctionComponent = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Content style={{margin: '0 16px'}} className={'content-bg'}>
            <MoltoBreadcrumb></MoltoBreadcrumb>
            <Header style={{ padding: 0, background: colorBgContainer }}>
            </Header>
            <Row>
                <Col span={12}>
                    <img src="https://picsum.photos/id/1011/400/400" alt="Playlist 2"/>
                </Col>
                <Col span={12}>
                    <Row>
                        <Col span={24}>タイトル</Col>
                        <Col span={24}>アーティスト</Col>
                        <Col span={24}>説明</Col>
                    </Row>
                </Col>
            </Row>
            <Footer style={{ textAlign: 'center' }}>Molto.inc ©2023 </Footer>
        </Content>
    );
}

/**
 * パンくずリスト
 * @constructor
 */
const MoltoBreadcrumb: React.FunctionComponent = () => {
    return (
        <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Library</Breadcrumb.Item>
        </Breadcrumb>
    );
}

/**
 * サイドバー
 * @constructor
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const MoltoSider = ({itemsProps}: { itemsProps: MenuItem[] }) => {
    const [collapsed, setCollapsed] = useState(false);

    return(
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => { setCollapsed(value); }}>
            <div style={{ height: 32, margin: 16,  background: 'rgba(54,54,54,0.92)'}} className={'app-logo'}>
                <a href={'/'}></a>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={itemsProps} />
        </Sider>
    );
}