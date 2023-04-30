import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Col, Input, Row, Divider } from 'antd';

import {signUpFormUserIdState} from "../../atoms/signUpFormState";
import {useRecoilState} from "recoil";

const redirectPathToLogin          = '/login';

const SignUp: () => JSX.Element = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [signUpFormUserId, setSignUpFormUserId] = useRecoilState(signUpFormUserIdState);

    const onChangeUserIdHandler = (event: React.ChangeEvent<HTMLInputElement>): void =>{
        const formInputs = event.target.value;
        setSignUpFormUserId(formInputs);
    }

    return (
        <div className="container" style={{color: "#d7d7d7", paddingLeft: 30}}>
            <section className="featured">
                <h2>SIGN UP</h2>
                <div className="sign-up">
                    <Divider/>
                    <Row>
                        <Col span={3} offset={6} style={{marginRight:0}}>
                            <p>UserId</p>
                        </Col>
                        <Col span={9} offset={6} style={{marginLeft:0}}>
                            <Input required
                                   placeholder="moltoUser"
                                   value={signUpFormUserId}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => { onChangeUserIdHandler(event); }}
                            />
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
                    <Divider/>
                    <Row>
                        <Col span={3} offset={6} style={{marginRight:0}}>
                        </Col>
                        <Col span={9} offset={6} style={{marginLeft:0}}>
                            <a href={redirectPathToLogin}>please login. if you have a account.</a>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );
};

export default SignUp;