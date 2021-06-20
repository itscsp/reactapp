import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
    return(
        <styles>
            <Navbar expand="md" className="navbar" >
                <Navbar.Brand  className ="logo" href="/">CSP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic--navbar-nav">
                    <Nav className="ml-auto nav-wrapper">
                        <Nav.Item>
                            <Nav.Link href="/" className="nav-item">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-item" href="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-item" href="/contact">Cantact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </styles>
    )
};

export default NavigationBar;
