import React from 'react';
import './Footer.css';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <div className='text-center mt-5'>
                <p><small><a style={{ color: 'black', textDecoration: 'none' }} href="#/">Privacy Policy</a></small>/<span>copyright @ {year} </span>/All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;