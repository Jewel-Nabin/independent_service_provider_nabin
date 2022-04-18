import React from 'react';
import './Checkout';
const Checkout = () => {
    return (
            <div class="container">
                <div class="row">
                    <h4>Click the following button and grab your fitness to fill up the Yoga Class Registration Form</h4>
                    <div class="col text-center">
                    <a href="https://form.jotform.com/221073552727454">
                        <button style={{ background: '#d63384', color: 'white', border: 'none'}} className='btn-color btn-lg'>Register</button>
                    </a>
                    </div>
                </div>
            </div>
    );
};

export default Checkout;