import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from "react-router-dom";

const Navigation = props => {
    return (
        <div className="navigation">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <NavLink exact to="/">
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navigation;