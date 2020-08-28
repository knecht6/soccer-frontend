import React from "react";
export const ButtonGroup = ({children}) =>  {
    return <div className='btn-group'>
        {children}
    </div>
};
export const Button = ({children, type}) => {
    return <button className={'btn '+type}>
        {children}
    </button>
};
