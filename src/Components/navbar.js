import Navbar from "react-bootstrap/Navbar";
import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";





class Navvbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/Home">Study Page</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/Todo">To Do</Nav.Link>
                    <Nav.Link href="/Examples">Examples</Nav.Link>
                    <Nav.Link href="/Resources">Resources</Nav.Link>
                    <Nav.Link href="/Game">Game</Nav.Link>
                    <Nav.Link href="/Feedback">Feedback</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Navvbar;

