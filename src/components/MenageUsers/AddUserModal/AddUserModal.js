import React from 'react';
import "./AddUserModal.scss";
import {seletAddUserModal} from "../../../store/selectors/modals.selector";
import {connect} from "react-redux";
import {closeAddUserModal} from "../../../store/actions/modals.actions";
import 'rodal/lib/rodal.css';
import Rodal from 'rodal';

const AddUserModal = props => {
    return (
        <Rodal visible={props.addUserModal} className="add-user-modal" onClose={props.closeAddUserModal}>
            <div className="add-user-modal-content">
                <div>ASDASDASDA</div>
                <button onClick={props.closeAddUserModal}>Close</button>
            </div>
        </Rodal>
    );
};

const mapStateToProps = state => ({
    addUserModal: seletAddUserModal(state)
});

const mapDispatchToProps = dispatch => ({
    closeAddUserModal: () => dispatch(closeAddUserModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserModal);