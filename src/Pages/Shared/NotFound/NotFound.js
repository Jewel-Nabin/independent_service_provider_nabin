import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';


const NotFound = () => {
    return (
        <div className='container mt-5 text-center text-secondary not-page-found'>
            <h1>Oops!</h1>
            <hr />
            <p>I love to simplify and it looks like this page has been decluttered!</p>
            <p>(Decluttering is good for the mind and soul).</p>
            <Link to={'/home'}>
                <button className='not-found-btn rounded not-found-btn'>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;