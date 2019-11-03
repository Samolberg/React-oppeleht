import Navbar from "react-bootstrap/Navbar";
import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";
import Home from "./Home";
import Todo from "./Todo";
import Examples from "./Examples";
import Resources from "./Resources";
import Game from "./Game";
import Feedback from "./Feedback";
import {Route, BrowserRouter, Link} from "react-router-dom";





class Navvbar extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/Home">Study Page</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/ToDo">To Do</Nav.Link>
                        <Nav.Link as={Link} to="/Examples">Examples</Nav.Link>
                        <Nav.Link as={Link} to="/Resources">Resources</Nav.Link>
                        <Nav.Link as={Link} to="/Game">Game</Nav.Link>
                        <Nav.Link as={Link} to="/Feedback">Feedback</Nav.Link>
                    </Nav>
                </Navbar>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/Todo" component={Todo}/>
                <Route exact path="/Examples" component={Examples}/>
                <Route exact path="/Resources" component={Resources}/>
                <Route exact path="/Game" component={Game}/>
                <Route exact path="/Feedback" component={Feedback}/>
            </BrowserRouter>
        )
    }
}

export default Navvbar;

