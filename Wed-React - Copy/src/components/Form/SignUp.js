/* import { BsFacebook, BsTelegram } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc' */
import { useAuth } from '../context/AuthContext';

import { Form, Button, Card, Alert } from 'react-bootstrap';
import React, { useRef, useState } from "react"

export default function LoginForm() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    async function handleSubmit(e) {
        e.preventDefault()

        // đặt điều kiện cho form
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords không khớp nha!')
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Tạo tài khoản không thành công')
        } finally {
            console.log("ok")
        }

        setLoading(false)


    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sing Up</h2>
                    {JSON.stringify(currentUser)} {/* {currentUser && currentUser.email} */}
                    {error && <Alert variant="danger"> {error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>

                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>

                        <Button disabled={loading} className="w-100" type="sumit" >Sign up</Button>
                    </Form>

                </Card.Body>
            </Card>
            {/*   <div className="w-100 text-center mt-2">
                    Aready have an account ? Login
                </div> */}

        </>

    );
    
}
/* 
<Button className="button-sevices" style={{ width: '29%', background: 'red' }} type="sumit" > <BsFacebook /></Button>
<Button className="button-sevices" style={{ width: '29%', background: 'red' }} type="sumit" ><FcGoogle /></Button>
<Button className="button-sevices" style={{ width: '29%', background: 'red' }} type="sumit" ><BsTelegram /></Button> */

