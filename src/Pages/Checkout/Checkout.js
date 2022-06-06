import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import './Checkout.css'

const Checkout = () => {
    const [user] = useAuthState(auth);

    const handleConfirm = event => {
        event.preventDefault();
        const address = event.target.address.value;
        if (address) {
            toast.success('Enroll successfully confirmed !')
        }
    }

    return (
        <section>
            <div className='fonfirm-container'>
                <div className='enroll-form'>
                    <Form onSubmit={handleConfirm} className='c-input-field'>
                        <h3 className='mb-4'>Please Confirm</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='rounded-pill' type="text" defaultValue={user.displayName} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='rounded-pill' type="email" defaultValue={user.email} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='rounded-pill' type="text" placeholder="Please enter your number" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <textarea className='rounded mx-auto p-1 d-block w-100' name="address" id="" cols="45" rows="2" placeholder='Please enter your address' required></textarea>
                        </Form.Group>
                        <Button className='rounded-pill p-2 w-100' variant="primary" type="submit">
                            CONFIRM NOW
                        </Button>
                    </Form>
                    <ToastContainer />
                </div>
            </div>
        </section>
    );
};

export default Checkout;