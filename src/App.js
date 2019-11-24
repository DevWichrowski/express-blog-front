import React from 'react';
import './App.scss';
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation/>
                <Route exact path="/" component={Home}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
