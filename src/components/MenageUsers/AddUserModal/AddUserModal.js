import React from 'react';
import "./AddUserModal.scss";
import EasyModal from "../../shared/EasyModal/EasyModal";
import {seletAddUserModal} from "../../../store/selectors/modals.selector";
import {connect} from "react-redux";
import {closeAddUserModal} from "../../../store/actions/modals.actions";

const AddUserModal = props => {
    return (
        <EasyModal visible={props.addUserModal} className="add-user-modal" closeModal={closeAddUserModal}>
            <div>ASDASDASDA</div>
            <button onClick={props.closeAddUserModal}>Close</button>
        </EasyModal>
    );
};

const mapStateToProps = state => ({
    addUserModal: seletAddUserModal(state)
});

const mapDispatchToProps = dispatch => ({
    closeAddUserModal: () => dispatch(closeAddUserModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserModal);