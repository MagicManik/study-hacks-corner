import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { picture, name, description, perhour } = service;

    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className='service'>
            <img src={picture} alt="" />
            <h5 className='text-center p-1'>{name}</h5>
            <p>{description}</p>
            <p>Per Hour: <span className='text-primary'>{perhour}</span></p>
            <div className='service-button-container'>
                <button className='checkout-btn' onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    );
};

export default Service;