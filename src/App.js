import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navvbar from './Components/navbar.js';
import './style.css';



function App() {
    return (
        <div className="container">
            <Navvbar navbar={Navvbar}/>
        </div>
    );
}

export default App;
