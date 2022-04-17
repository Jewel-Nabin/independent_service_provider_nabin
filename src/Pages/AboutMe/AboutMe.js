import React from 'react';
import './AboutMe.css';
import profile from '../../../src/Images/profile-pic/profile.jpg';

const AboutMe = () => {
    return (
        <div className='about-me-container text-center'>
            <img src={profile} alt="" />
            <h3>MOHAMMED JEWEL (NABIN)</h3>
            <h5>Web Developer, Designer, and Student in Boalkhali, Chattogram, Bangladesh</h5>
            <a href="https://nabins-personal-portfolio.netlify.app/">
                <button className='btn-color btn-lg'>Hire me</button>
            </a>
            <p>Howdy, I’m Mohammed. I’m a web developer living in Boalkhali, Chattogram, Bangladesh. I am a fan of programming, web development, and design. I’m also interested in technology and yoga. You can hire me with a click on the button above.</p>
        </div>
    );
};

export default AboutMe;