import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='d-flex flex-row-reverse pt-5'>
            <div className='w-50 px-5'>
                <Form className='w-75 me-5 pe-5'>
                    <h1 className='mb-4'>Welcome Back!</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
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