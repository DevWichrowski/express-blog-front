import React from 'react';
import "./AddUserModal.scss";
import {seletAddUserModal} from "../../../store/selectors/modals.selector";
import {connect} from "react-redux";
import {closeAddUserModal} from "../../../store/actions/modals.actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";


const AddUserModal = props => {
    return (
        <Dialog className="add-user-modal" onClose={props.closeAddUserModal} aria-labelledby="customized-dialog-title"
                open={props.addUserModal}>
            <DialogTitle id="customized-dialog-title" onClose={props.closeAddUserModal}>
                Add users
            </DialogTitle>
            <DialogContent className="content" dividers>
                <TextField id="standard-basic" label="Standard" variant="outlined"/>
                <TextField id="standard-basic" label="Standard" variant="outlined"/>
                <TextField id="standard-basic" label="Standard" variant="outlined"/>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={props.closeAddUserModal} color="primary">
                    Save changes
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const mapStateToProps = state => ({
    addUserModal: seletAddUserModal(state)
});

const mapDispatchToProps = dispatch => ({
    closeAddUserModal: () => dispatch(closeAddUserModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserModal);