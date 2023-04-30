import React from 'react';

import {Row, Col, Divider, Input, Space, Button} from "antd";
// 遷移先 TODO: 【低】定数ファイル
// const redirectPathToArtist  = '/artist';
// const redirectPathToArtWork = '/artWork';

const selectedLanguage = 'ENGLISH';


const AccountSetting: React.FunctionComponent = () => {
    return (
        <div className="container" style={{color: "#d7d7d7", paddingLeft: 30}}>
            <section className="featured">
                <h2>ACCOUNT SETTINGS</h2>
                <div className="account-setting">
                    <Row>
                        <Col span={12} offset={6}>
                            <h3>USER ID</h3>
                        </Col>
                        <Col span={12} offset={6}>
                            <p>
                                Molto_developer
                            </p>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <Col span={12} offset={6}>
                            <h3>USER NAME</h3>
                        </Col>
                        <Col span={12} offset={6}>
                            <p>
                                モルト・レノン
                            </p>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <Col span={12} offset={6}>
                            <h3>APIKEY for SoundCloud</h3>
                        </Col>
                        <Col span={12} offset={6}>
                            <p>last updated at 2023/04/26</p>
                            <Space.Compact style={{ width: '100%' }}>
                                <Input defaultValue="Combine input and button" value='***********************************************************' />
                                <Button type="primary">Update</Button>
                            </Space.Compact>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <Col span={12} offset={6}>
                            <h3>LANGUAGE</h3>
                        </Col>
                        <Col span={12} offset={6}>
                            <select>
                            <option value={selectedLanguage} selected>{selectedLanguage}</option>
                            <option value={'JAPANESE'}>日本語</option>
                            </select>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );
};
export default AccountSetting;