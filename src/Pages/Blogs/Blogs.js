import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <section className='blog-container'>

            <div className='blog-text'>
                <h3><span className='gradient-text-2'>Difference between authorization and authentication?</span></h3>
                <p></p>
            </div>

            <div className='blog-text'>
                <h3><span className='gradient-text-2'>Why are you using firebase? What other options do you have to implement authentication?</span></h3>
                <p></p>
            </div>
            <div className='blog-text'>
                <h3 className='text-center'><span className='gradient-text-2'> What other services does firebase provide other than authentication?
                </span></h3>
                <p></p>
            </div>
        </section>
    );
};

export default Blogs;