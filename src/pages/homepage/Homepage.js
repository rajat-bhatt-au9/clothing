import React from 'react';
import './homepage.scss';
import Directory from '../../components/directory/Directory';
import Banner from '../../components/banner/Banner';

const HomePage =()=>(
    <div>
        <Banner />
        
        <div className='homepage' >
            <Directory />
        </div>
    </div>
);

export default HomePage;
