import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Col, Input, Row, Divider } from 'antd';

const Login: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <div className="container" style={{color: "#d7d7d7", paddingLeft: 30}}>
            <section className="featured">
                <h2>SIGN UP</h2>
                <div className="sign-up">
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
                    <Row>
                        <Col span={3} offset={6} style={{marginRight:0}}>
                            <p>PassWord</p>
                        </Col>
                        <Col span={9} offset={6} style={{marginLeft:0}}>
                            <Input.Password required placeholder="inputStrongPassWord" iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={3} offset={6} style={{marginRight:0}}>
                            <p>PassWord (ReInput)</p>
                        </Col>
                        <Col span={9} offset={6} style={{marginLeft:0}}>
                            <Input.Password required placeholder="inputStrongPassWord" visibilityToggle={{visible: passwordVisible, onVisibleChange: setPasswordVisible}}/>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <Col span={3} offset={6} style={{marginRight:0}}>
                        </Col>
                        <Col span={9} offset={6} style={{marginLeft:0}}>
                            <Button style={{width: 80}} type="primary">signUp</Button>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );
};

export default Login;