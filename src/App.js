import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navvbar from './Components/navbar.js';
import './style.css';
import Home from './Components/Home';
import Todo from './Components/Todo';
import Examples from './Components/Examples';
import Resources from './Components/Resources';
import Game from './Components/Game';
import Feedback from './Components/Feedback';


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Navvbar navbar={Navvbar}/>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/Todo" component={Todo}/>
                <Route exact path="/Examples" component={Examples}/>
                <Route exact path="/Resources" component={Resources}/>
                <Route exact path="/Game" component={Game}/>
                <Route exact path="/Feedback" component={Feedback}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
