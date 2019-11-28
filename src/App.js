import React from 'react';
import './App.scss';
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import {BrowserRouter, Route} from "react-router-dom";
import AddPost from "./components/AddPost/AddPost";
import EditPost from "./components/EditPost/EditPost";
import history from "./core/history";
import Login from "./components/Login/Login";

function App() {
    return (
        <div className="App">
            <BrowserRouter history={history}>
                <Navigation/>
                <Route exact path="/" component={Home}/>
                <Route path="/add-post" component={AddPost}/>
                <Route path="/edit-post/:id" component={EditPost}/>
                <Route path="/login" component={Login}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
