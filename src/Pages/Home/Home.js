import React from 'react';
import MissionVission from '../MissionVission/MissionVission';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <MissionVission></MissionVission>
        </div>
    );
};

export default Home;