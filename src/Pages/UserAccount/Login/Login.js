import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // ___________________________________________
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    // ___________________________________________
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }


    // ___________________________________________
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }

    // ___________________________________________
    const handleCreateUser = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='d-flex flex-row-reverse pt-5'>
            <div className='w-50 px-5'>
                <Form onSubmit={handleCreateUser} className='w-75 me-5 pe-5'>
                    <h1 className='mb-4'>Welcome Back!</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>

                <div className='w-75 me-5 pe-5'>
                    <p className='mt-3'>Are you new in Study Hacks Corner? <Link to={'/register'}>Please Register</Link></p>

                    <div className='w-100 d-flex justify-content-center align-items-center'>
                        <div className='login-methord-divided'>

                        </div>
                        <p className='mt-2 m-2'>or</p>
                        <div className='login-methord-divided'>

                        </div>
                    </div>
                </div>
                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default Login;