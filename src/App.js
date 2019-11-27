import React from 'react';
import './App.scss';
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import {BrowserRouter, Route} from "react-router-dom";
import AddPost from "./components/AddPost/AddPost";
import EditPost from "./components/EditPost/EditPost";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation/>
                <Route exact path="/" component={Home}/>
                <Route path="/add-post" component={AddPost}/>
                <Route path="/edit-post" component={EditPost}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
