import React from 'react';
import tutor from '../../../images/tutor-02.png'
import './Banner.css'

const Banner = () => {
    return (
        <section>
            <div className='banner-container'>
                <div className='banner-left'>
                    <h1>Study Hacks Corner of Dhaka</h1>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed</p>

                    <div className='w-lg-75 mt-3 d-flex justify-content-between'>
                        <div className='mt-5'>
                            <button className='free-assesment-btn'>FREE ASSESMENT</button>
                        </div>
                        <div className='mt-5'>
                            <button className='learn-more-btn'>LEARN MORE</button>
                        </div>
                    </div>
                </div>
                <div className='banner-tutor'>
                    <img className='img-fluid' src={tutor} alt="" />

                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8f9fa" fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,112C480,96,600,96,720,133.3C840,171,960,245,1080,256C1200,267,1320,213,1380,186.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </div>
        </section>
    );
};

export default Banner;