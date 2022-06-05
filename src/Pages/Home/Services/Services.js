import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services] = useServices();
    return (

        <div id='hash' className='services-container'>
            <h1 className='text-center my-service mb-0'>My Services</h1>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8f9fa" fill-opacity="1" d="M0,288L80,256C160,224,320,160,480,165.3C640,171,800,245,960,245.3C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

            </div>

            <div className='services'>

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8f9fa" fill-opacity="1" d="M0,64L60,58.7C120,53,240,43,360,80C480,117,600,203,720,202.7C840,203,960,117,1080,74.7C1200,32,1320,32,1380,32L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>


    );
};

export default Services;