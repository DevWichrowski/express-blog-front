import React from 'react';
import "./EasyModal.scss";
import {Transition} from "react-spring/renderprops-universal";

const EasyModal = props => {

    const {visible} = props;
    return (
        <>
            {visible ?
                <Transition
                    items={visible}
                    from={{opacity: 0}}
                    enter={{opacity: 1}}
                    leave={{opacity: 0}}
                    children={true}
                >
                    {visible => visible && (props => <div style={props} className={`${props.className ?? ''} easy-modal`}
                    >
                        {props.children}
                    </div>)}


                </Transition> : null}
        </>
    );
};

export default EasyModal;