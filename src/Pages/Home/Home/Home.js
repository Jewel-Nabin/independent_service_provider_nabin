import React from 'react';
import './Home.css';
import Services from './Services/Services';
import background from '../../../Images/banner/background.jpg';


const Home = () => {
    return (
        <div>
            <div className='header-main mt-5'>
                <div className='bg-title'>
                    <h3>Yoga is really the art of waking up.</h3>
                    <p>Getting back to the true you. It can be that simple. Yoga offers up a way for us to see a world that is working for you instead of against you. Yoga reminds me that everything is connected so we must live, act, breathe with awareness. The process is the candy. Enjoy!</p>
                </div>
                <img className='bg-img' src={background} alt="" />
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;