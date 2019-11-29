import React, {useState} from 'react';
import AppBar from "@material-ui/core/AppBar";
import "./Navigation.scss";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";
import AdminDrawer from "./AdminDrawer/AdminDrawer";

const Navigation = props => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [side]: open});
    };

    return (
        <div className="navigation">
            <AdminDrawer state={state} toggleDrawer={toggleDrawer}/>
            <AppBar position="static">
                <Toolbar variant="dense" className="navigation-bar">
                    <div className="nav-left-column">
                        <NavLink exact to="/">
                            <Typography color="inherit" className="navigation-link">
                                Home
                            </Typography>
                        </NavLink>
                        <NavLink exact to="/add-post">
                            <Typography color="inherit" className="navigation-link">
                                Add post
                            </Typography>
                        </NavLink>
                    </div>
                    <div className="nav-right-column">
                        <NavLink exact to="/login">
                            <Typography color="inherit" className="navigation-link">
                                Login
                            </Typography>
                        </NavLink>
                        <Typography color="inherit" className="navigation-link" onClick={toggleDrawer('right', true)}>
                            {/*<Button onClick={toggleDrawer('right', true)}>Open Right</Button>*/}
                            Admin Panel
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navigation;