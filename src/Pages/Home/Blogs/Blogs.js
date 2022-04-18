import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <div>
                <h5>1. The difference between authorization and authentication</h5>
                <p>
                    <ol>
                        <li>Authentication verifies the user. Contrariwise authorization determines what resources a user can access.</li>
                        <li>In authentication process, users or persons are verified.  persons are verified.	While in this process, users or persons are validated.</li>
                        <li>Authentication is the first step of a good identity and access management process.Authorization always takes place after authentication.</li>
                        <li>It needs usually user’s login details. While it needs user’s privilege or security levels.</li>
                        <li>Authentication is visible to and partially changeable by the user. Authorization isn’t visible to or changeable by the user.</li>
                    </ol>
                </p>
            </div>
            <div>
                <h5>2. Why are we using firebase? What other options do we have to implement authentication?</h5>
                <ol>
                    <h6>The Firebase Realtime Database lets us build rich, collaborative applications by allowing secure access to the database directly from client-side code. Also,There are 4 reasons while we use Firebase.</h6>
                    <p>Those are:
                        <li>Incredibly Built-In Analytics</li>
                        <li>App Development Made Easy</li>
                        <li>Growth and User Engagement</li>
                        <li>Increase Your Earnings</li>
                    </p>
                </ol>
                <h6>The second section is:.. There are many alternatives to authentication on the internet but I would like to mention five resorces</h6>
                <ol>
                    <li>Multi-factor Authentication</li>
                    <li>Certificate-based Authentication</li>
                    <li>Biometric Authentication</li>
                    <li>Token-based Authentication</li>
                    <li>Single Sign-on</li>
                </ol>
            </div>
            <div>
                <h5>3. What other services does firebase provide other than authentication?</h5>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>

                <ol>
                    <li>FirebaseUI Auth:
                        <ul>
                            <li>Drop-in authentication solution</li>
                        </ul>
                    </li>
                    <li>Firebase SDK Authentication:
                        <ul>
                            <li>Email and password based authentication</li>
                            <li>Federated identity provider integration</li>
                            <li>Phone number authentication</li>
                            <li>Custom auth system integration</li>
                            <li>Anonymous auth</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Blogs;