import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {NavLink} from "react-router-dom";

const AdminDrawer = props => {
    const sideList = side => (
        <div
            role="presentation"
            onClick={props.toggleDrawer(side, false)}
            onKeyDown={props.toggleDrawer(side, false)}
        >
            <List>
                <ListItem button key="My account">
                    My account
                </ListItem>
                <ListItem button key="Administrate posts">
                    Administrate posts
                </ListItem>
                <NavLink exact to="/add-post">
                    <ListItem button key="Add posts">
                        Add posts
                    </ListItem>
                </NavLink>
                <ListItem button key="Add posts">
                    Users
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className="admin-drawer">
            <Drawer anchor="right" open={props.state.right} onClose={props.toggleDrawer('right', false)}>
                {sideList('right')}
            </Drawer>
        </div>
    );
}

export default AdminDrawer;