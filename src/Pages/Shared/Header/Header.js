import React from 'react';
import './Header.css';
import logo from '../../../Images/Icon/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='container'>
            <nav className='nav-container'>
                <div className='title'>
                    <img src={logo} alt="" />
                    <h2><span className='balance'>Balance </span> <span className='yoga'>YOGA</span></h2>
                </div>
                <div className='routes'>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/blogs'}>Blog</Link>
                    <Link to={'/aboutme'}>About me</Link>
                    <Link to={'/services'}></Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;