import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowRightRotate, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Service.css'

const Service = ({ service }) => {
    const { picture, name, description, permonth } = service;

    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className='service'>
            <img src={picture} alt="" />
            <h5 className='text-center p-1'>{name}</h5>
            <p>{description}</p>
            <p>Per Month: <span className='course-price'>{permonth}</span></p>
            <div onClick={handleCheckout} className='service-button-container'>
                <button className='checkout-btn'>Enroll now</button>
                <FontAwesomeIcon className='service-icon' icon={faArrowRight}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Service;