import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    return (
        <Navbar className='navbar-style p-1' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand className='text-dark fs-5 fw-bold' as={Link} to="/">Study Hacks Corner</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-dark fs-5 nav-menu' as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link className='text-dark fs-5' as={Link} to="/checkout">Checkout</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user ? <button className='bg-transparent text-dark fs-5 border-0' onClick={logout}>Log Out</button> :
                                <Nav.Link className='text-dark fs-5' as={Link} to="/login">
                                    Login
                                </Nav.Link>
                        }
                        <Nav.Link className='text-dark fs-5' as={Link} to="/register">
                            Register
                        </Nav.Link>
                        <Nav.Link className='text-dark fs-5' as={Link} to="/about">
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;