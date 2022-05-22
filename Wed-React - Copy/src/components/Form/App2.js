
import React from "react"
import { AuthProvider } from "../context/AuthContext"
import { Container } from 'react-bootstrap';
import LoginForm from './SignUp';

export default function App2() {
    return (
        <AuthProvider>
        <Container className="d-flex align-items-center jusify-content-center"
            style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: '550px' }}>
                <LoginForm />
            </div>

        </Container>
        </AuthProvider>

    );
}

