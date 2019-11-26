import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import "./Navigation.scss";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";

const Navigation = props => {
    return (
        <div className="navigation">
            <AppBar position="static">
                <Toolbar variant="dense">
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
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navigation;