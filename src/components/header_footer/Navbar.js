import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import {Navbar , Nav , Button} from 'react-bootstrap'
import logo from './logo3.png'
function Header() {
    
    return (
        <div>
            <Navbar expand="lg" variant="light" className="main-navbar">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="outline-primary" className="toggle-navbar-icon" />
                <Navbar.Brand href="/home" className="brand-span">
                    <img alt="" src={logo} className="d-inline-block align-top logo-image" />{' '}
                    <Navbar.Brand href="#home" className="navbar-brand-name">
                        <span>
                            MEDONOR
                        </span>
                    </Navbar.Brand>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav className="justify-content-center">
                        <Nav.Link href="/home" className="navbar-main-links">
                            <span className="navbar-nav-links">Home</span>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/about" className="navbar-main-links">
                            <span className="navbar-nav-links">About us</span>
                        </Nav.Link>
                        <Nav.Link eventKey={3} href="/waystohelp" className="navbar-main-links">
                            <span className="navbar-nav-links">Ways to Help</span>
                        </Nav.Link>
                        <Nav.Link eventKey={4} href="/blog" className="navbar-main-links">
                            <span className="navbar-nav-links">Blog</span>
                        </Nav.Link>
                        <Button variant="outline-info" className="sign-in-btn" inline>Sign in</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default Header;