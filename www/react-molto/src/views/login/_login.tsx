import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Col, Input, Row, Divider } from 'antd';

const redirectPathToSignUp         = '/register';

const Login: () => JSX.Element = () => {
    return (
        <div className="container" style={{color: "#d7d7d7", paddingLeft: 30}}>
            <section className="featured">
                <h2>LOGIN</h2>
                <div className="login">
                    <Divider/>
                    <Row>
                        <Col span={3} offset={6} style={{marginRight:0}}>
                            <p>UserId</p>
                        </Col>
                        <Col span={9} offset={6} style={{marginLeft:0}}>
                            <Input required placeholder="moltoUser"/>
                        </Col>
                    </Row>
                    {/* // TODO: プロトタイプでは電話番号認証はしない
                    <Row>
                        <Col span={3} offset={6} style={{marginRight:0}}>
                            <p>phoneNumber</p>
                        </Col>
                        <Col span={9} offset={6} style={{marginLeft:0}}>
                            <Input required placeholder="090-1234-5678" />
                        </Col>
                    </Row>
                    */}
                    <Divider/>
                    <Row>
                        <Col span={3} offset={6} style={{marginRight:0}}>
                            <p>PassWord</p>
                        </Col>
                        <Col span={9} offset={6} style={{marginLeft:0}}>
                            <Input.Password required placeholder="inputStrongPassWord" iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}/>
                        </Col>
                    </Row>
                    <Divider/>
                    <Divider/>
                    <Row>
                        <Col span={3} offset={6} style={{marginRight:0}}>
                        </Col>
                        <Col span={9} offset={6} style={{marginLeft:0}}>
                            <Button style={{width: 80}} type="primary">login</Button>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <Col span={3} offset={6} style={{marginRight:0}}>
                        </Col>
                        <Col span={9} offset={6} style={{marginLeft:0}}>
                            <a href={redirectPathToSignUp}>please sign up if you do not have any account.</a>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );
};

export default Login;