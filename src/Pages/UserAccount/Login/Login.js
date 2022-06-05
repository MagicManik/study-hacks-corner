import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginImg from '../../../images/login.png'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // using react firebase hooks
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // using react firebase hooks
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const handleResetPassword = async () => {
        await sendPasswordResetEmail(email);
        if (email) {
            toast('Sent Email');
        }
        if (!email) {
            alert('Please enter your email then click me')
        }
    }


    // navigate after successfully login user
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }


    // handle error
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    // to get email and password input value
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }

    // handle sign in user
    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }

    return (
        <section>
            <div className='login-container'>

                <div>
                    <img className='login-img' src={loginImg} alt="" />
                </div>

                <div className='form-container'>
                    <Form className='input-field' onSubmit={handleSignIn}>
                        <h3 className='mb-4'>Login</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='rounded-pill' onBlur={handleEmail} type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='rounded-pill' onBlur={handlePassword} type="password" placeholder="Password" required />
                        </Form.Group>
                        {errorElement}
                        <Button className='rounded-pill p-2 w-100' variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>

                    <div>
                        <SocialLogin></SocialLogin>

                        <div className='w-100 d-flex justify-content-center align-items-center'>
                            <div className='login-methord-divided'>

                            </div>
                            <p className='mx-4'>or</p>
                            <div className='login-methord-divided'>
                            </div>

                        </div>
                    </div>
                    <div className='login-option'>
                        <p><button onClick={handleResetPassword}
                            className='link-button'>Reset Password?</button></p>

                        <p><Link to={'/register'}>Sign Up?</Link></p>
                    </div>
                    <ToastContainer />

                </div>
            </div>
        </section>
    );
};

export default Login;