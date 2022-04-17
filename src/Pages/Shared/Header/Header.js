import React from 'react';
import './Header.css';
import logo from '../../../Images/Icon/logo.jpg';
import bg from '../../../Images/yoga/bg.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='container'>
            <nav className='nav-container'>
                <div className='title'>
                    <img src={logo} alt="" />
                    <h2><span className='balance'>Balance </span> <span className='yoga'>YOGA</span></h2>
                </div>
                <div>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/blogs'}>Blog</Link>
                    <Link to={'/aboutme'}>About me</Link>
                    <Link to={'/services'}></Link>
                </div>
            </nav>

            <div className='header-main'>
                <h3>Yoga is really the art of waking up.</h3>
                <p>Getting back to the true you. It can be that simple. Yoga offers up a way for us to see a world that is working for you instead of against you. Yoga reminds me that everything is connected so we must live, act, breathe with awareness. The process is the candy. Enjoy!</p>
            </div>
        </header>
    );
};

export default Header;