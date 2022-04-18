import React from 'react';
import './About.css';
import profile from '../../images/profile-pic/profile.jpg';
const About = () => {
    return (
        <div>
            <div className='about-me-container text-center container'>
                <img src={profile} alt="" />
                <h3>MOHAMMED JEWEL (NABIN)</h3>
                <h5>Web Developer, Designer, and Student in Boalkhali, Chattogram, Bangladesh</h5>
                <a href="https://nabins-personal-portfolio.netlify.app/">
                    <button className='btn-color btn-lg'>Hire me</button>
                </a>
                <p>Howdy, I’m Mohammed. I’m a web developer living in Boalkhali, Chattogram, Bangladesh. I am a fan of programming, web development, and design. I’m also interested in technology and yoga. You can hire me with a click on the button above.</p>
            </div>
            <div className='container'>
                <h6 className='text-center'>My Goal:</h6>
                <p>Chalk on hand in my programming through the programming hero community. I am basically from a non-CSC background i.e. I am a student of the Department of Accounting at the National University. The new possibilities of technology are driving me towards programming. Now my goal is to acquire programming or web development skills as well as get job in IT sector so that I can use my acquired skills. For this I am learning programm.
                    In addition to taking courses from Programming Hero's, I am using as much time as I can in programming. Now my main goal is to build myself as a junior web developer by 2022</p>
            </div>
        </div>
    );
};

export default About;