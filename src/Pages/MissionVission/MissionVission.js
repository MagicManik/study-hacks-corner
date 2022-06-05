import React from 'react';
import './MissionVission.css'

const MissionVission = () => {
    return (
        <section className='bg'>
            <div className='blog-container'>
                <div className='mission-container'>
                    <div className="mission">
                        <h4>MISSION</h4>
                        <h3><span>My Mission</span></h3>
                        <p>My mission is to build friendly relations with the students and educate them in good education. My real mission is to achieve the goal that they can become real people and work for the family, society and country.</p>
                    </div>
                </div>

                <div className='vission-container'>
                    <div className="vission">
                        <h4>VISSION</h4>
                        <h3><span>My Vission</span></h3>
                        <p>My vision is to understand the mindset of the students and teach them what is good and what is bad. My main and only goal is how to make them fruitful</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVission;