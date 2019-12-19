import React, {useEffect} from 'react';
import "./MenageUsers.scss";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {getUsersSelector} from "../../store/selectors/users.selectors";
import {getUsersPending} from "../../store/actions/users.actions";
import {connect} from "react-redux";
import Avatar from "@material-ui/core/Avatar";


const MenageUsers = props => {
    useEffect(() => {
        props.getUsers();
    }, []);

    const {users} = props;
    return (
        <div className="administrate-users">
            <Paper className="user-paper">
                <Table className="user-table" aria-label="simple table">
                    <TableHead className="table-head">
                        <TableRow>
                            <TableCell className="user-head-cell">Avatar</TableCell>
                            <TableCell className="user-head-cell">Nickname</TableCell>
                            <TableCell className="user-head-cell">Login</TableCell>
                            <TableCell className="user-head-cell">Password</TableCell>
                            <TableCell className="user-head-cell">E-mail</TableCell>
                            <TableCell className="user-head-cell" align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user._id}>
                                <TableCell component="th" scope="row">
                                    <Avatar alt={user.nickname} src={user.avatar || ''}/>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {user.nickname || '-'}
                                </TableCell>
                                <TableCell>{user.login}</TableCell>
                                <TableCell>password here</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell align="right">
                                    <DeleteIcon className="delete-icon"/>
                                    {/*<NavLink to={`/edit-post/${row._id}`}>*/}
                                    <EditIcon/>
                                    {/*</NavLink>*/}
                                    {/*<NavLink to={`/single-post/${row._id}`}>*/}
                                    <VisibilityIcon/>
                                    {/*</NavLink>*/}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
};

const mapStateToProps = state => ({
    users: getUsersSelector(state),
});

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsersPending()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenageUsers);