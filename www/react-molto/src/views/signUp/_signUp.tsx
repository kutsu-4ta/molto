import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Col, Input, Row, Divider } from 'antd';

import {signUpFormUserIdState, signUpFormPassWordState, signUpFormReInputPassWordState} from "../../atoms/signUpFormState";
import {useRecoilState} from "recoil";

const redirectPathToLogin          = '/login';

const SignUp: () => JSX.Element = () => {
    const [signUpFormUserId, setSignUpFormUserId] = useRecoilState(signUpFormUserIdState);
    const [signUpFormPassWord, setSignUpFormPassWord] = useRecoilState(signUpFormPassWordState);
    const [signUpFormReInputPassWord, setSignUpFormReInputPassWord] = useRecoilState(signUpFormReInputPassWordState);
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const onChangeUserIdHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const formInputs = event.target.value;
        // TODO:バリデーションチェック
        setSignUpFormUserId(formInputs);
    }
    const onChangePassWordHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const formInputs = event.target.value;
        // TODO:バリデーションチェック
        setSignUpFormPassWord(formInputs);
    }
    const onChangeReInputPassWordHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const formInputs = event.target.value;
        // TODO:バリデーションチェック
        setSignUpFormReInputPassWord(formInputs);
    }

    const submitSignUp = (): void => {
        const formInputData = [
            signUpFormUserId,
            signUpFormPassWord
        ];

        // TODO:APIでリクエスト投げる
        console.log(formInputData);
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
                            <Input.Password required
                                            placeholder="inputStrongPassWord"
                                            iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                            value={signUpFormPassWord}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { onChangePassWordHandler(event); }}
                                            visibilityToggle={{visible: passwordVisible, onVisibleChange: setPasswordVisible}}
                            />
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <Col span={3} offset={6} style={{marginRight:0}}>
                            <p>PassWord (ReInput)</p>
                        </Col>
                        <Col span={9} offset={6} style={{marginLeft:0}}>
                            <Input.Password required
                                            placeholder="inputStrongPassWord"
                                            iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                            value={signUpFormReInputPassWord}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { onChangeReInputPassWordHandler(event); }}
                                            visibilityToggle={{visible: passwordVisible, onVisibleChange: setPasswordVisible}}
                            />
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <Col span={3} offset={6} style={{marginRight:0}}>
                        </Col>
                        <Col span={9} offset={6} style={{marginLeft:0}}>
                            <Button style={{width: 80}} type="primary" onClick={submitSignUp}>signUp</Button>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <Col span={3} offset={6} style={{marginRight:0}}>
                        </Col>
                        <Col span={9} offset={6} style={{marginLeft:0}}>
                            <a href={redirectPathToLogin}>please login if you have a account.</a>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );
};

export default SignUp;