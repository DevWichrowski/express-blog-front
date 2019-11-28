import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import "./Navigation.scss";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const Navigation = props => {
    return (
        <div className="navigation">
            <AppBar position="static">
                <Toolbar variant="dense" className="navigation-bar">
                    <div className="nav-left-column">
                        <NavLink exact to="/">
                            <Typography variant="h6" color="inherit" className="navigation-link">
                                Home
                            </Typography>
                        </NavLink>
                        <NavLink exact to="/add-post">
                            <Typography variant="h6" color="inherit" className="navigation-link">
                                Add post
                            </Typography>
                        </NavLink>
                    </div>
                    <div className="nav-right-column">
                        <NavLink exact to="/login">
                            <Typography variant="h6" color="inherit" className="navigation-link">
                                Login
                            </Typography>
                        </NavLink>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navigation;