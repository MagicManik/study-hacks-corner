import React from 'react';

const SocialLogin = () => {
    return (
        <div className='w-75 me-5 pe-5'>
            <div className='mb-3 mt-3'>
                <button className='btn btn-primary w-100'>Google Signin</button>
            </div>
            <div>
                <button className='btn btn-primary w-100'>Github Signin</button>
            </div>
        </div>
    );
};

export default SocialLogin;