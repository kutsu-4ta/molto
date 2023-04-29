import React from "react";
// antDesignコンポーネント
import {Avatar, Menu, type MenuProps} from "antd";
// アイコン
import {HomeOutlined, LoginOutlined, SearchOutlined, TeamOutlined} from "@ant-design/icons";

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
        <div style={{display: "flex", placeContent: "space-between", height: 65}}>
            <div className="logo" style={{paddingLeft: 30, paddingRight: 30, backgroundColor: '#272736'}}>
                <span style={{color: "#a12fff", fontSize: 30}}>
                    Molto
                </span>
            </div>
            <Menu style={{width: '100%'}} theme="dark" mode="horizontal" items={headerItems}/>
        </div>
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

export {HeaderNav, }