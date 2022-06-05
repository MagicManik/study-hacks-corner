import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import registerImg from '../../../images/register.png'
import './Register.css'

const Register = () => {

    // use state to put input value
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // use state to check box
    const [agree, setAgree] = useState(false);

    // using react firebase hooks
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // using react firebase hooks
    const [updateProfile, updating] = useUpdateProfile(auth);

    // navigate after successfully create user account and login
    const navigate = useNavigate();
    if (user) {
        navigate('/')
    }

    // error handle
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    // get input value then set use state
    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }

    // event handler of creating user
    const handleCreateUser = async (event) => {
        event.preventDefault();
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }


    return (
        <section className='register-section'>
            <div className='login-container'>

                <div>
                    <img className='register-img' src={registerImg} alt="" />
                </div>

                <div className='form-container'>
                    <Form onSubmit={handleCreateUser}>
                        <h3 className='mb-4'>Register</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='rounded-pill register-input' onBlur={handleName} type="text" placeholder="Your name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='rounded-pill register-input' onBlur={handleEmail} type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='rounded-pill register-input' onBlur={handlePassword} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="I agree to the terms and conditions" />
                        </Form.Group>
                        {
                            errorElement
                        }
                        <div>
                            {agree ? <Button className='rounded-pill register-input' variant="primary" type="submit">
                                Register
                            </Button> : <Button className='rounded-pill register-input disabled' variant="primary" type="submit">
                                Register
                            </Button>}
                        </div>
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

                        <p className='mb-0 text-center'>Already have an account? <Link className='have-account' to={'/login'}>Login</Link></p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Register;