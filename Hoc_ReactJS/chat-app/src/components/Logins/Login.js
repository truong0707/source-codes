import React from 'react';
// import những gì cần dùng từ antd
import { Row, Col, Button, Typography } from 'antd'
import firebase,{ auth } from '../../firebase/config';

const {Title} = Typography;

const fbProvider = firebase.auth.FacebookAuthProvider()


export default function Login() {
    
    const handleFbLogin = () => {                                                                                                                           
        auth.signInWithPopup(fbProvider)
    }

    return(
        <div>
            <Row justify='center' style={{ height: 600}}>
                <Col span={8}>
                    <Title>Fun Chat</Title>
                    <Button style={{width:'100%', marginBottom: 5}}>Đăng Nhập bằng Google</Button>
                    <Button style={{width: '100%',}} onClick={handleFbLogin}>Đăng Nhập bằng Facebook</Button>
                </Col>
            </Row>

        </div>
    );
}