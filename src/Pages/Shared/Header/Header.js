import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar style={{ background: 'white'}} collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{ textDecoration: 'none' }} as={Link} to="/" className="me-auto">
                            <img height={150} src={logo} alt="" />
                            <h2 className='page-name'><span className='balance'>Balance </span> <span className='yoga'>YOGA</span></h2>
                        </Nav>
                        <Nav>
                            <Nav.Link href="home#services">
                                <h6 className="linkText">Services</h6>
                            </Nav.Link>
                            <Nav.Link as={Link} to="blogs">
                                <h6 className="linkText">Blogs</h6>
                            </Nav.Link>
                            <Nav.Link as={Link} to="about">
                                <h6 className="linkText">About Me</h6>
                            </Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>
                                        <h6 className="linkText">sign out</h6>
                                    </button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        <h6 className="linkText">Login</h6>
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;