import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Link from 'next/link';
// import Image from 'next/image'; // Import the Image component from Next.js
// import logoImage from '../public/logo.png'; // Replace with the path to your logo image


const NavigationHeader = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>
                <Link href="/" legacyBehavior>
                    <a>My Website</a>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link href="/" passHref legacyBehavior>
                        <Nav.Link>Home</Nav.Link>
                    </Link>
                    <Link href="/about-us" passHref legacyBehavior>
                        <Nav.Link>About</Nav.Link>
                    </Link>
                    <Link href="/register" passHref legacyBehavior>
                        <Nav.Link>Register</Nav.Link>
                    </Link>
                    <Link href="/login" passHref legacyBehavior>
                        <Nav.Link>Login</Nav.Link>
                    </Link>
                    <Link href="/protected" passHref legacyBehavior>
                        <Nav.Link>Protected</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
            <Button variant="primary">
                <Link href="/contact-us" passHref legacyBehavior>
                    <a style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
                </Link>
            </Button>
        </Navbar>
    );
};

export default NavigationHeader;