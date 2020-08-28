import React from "react";

export const Modal = (props) => {
    const style = props.style ? props.style : {};
    return <div id={props.id} style={style} className='modal'>
        <div className='modal-content'>
        {props.children}
        </div>
    </div>;
};
export const ModalHeader = ({children}) => {
    return <div className='modal-header'>
        {children}
    </div>;
};
export const ModalBody = ({children}) => {
   return <div className='modal-body'>
       {children}
   </div>;
};
export const ModalFooter = ({children}) => {
    return <div className='modal-footer'>
        {children}
    </div>
};