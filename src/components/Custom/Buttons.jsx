import React from "react";
export const ButtonGroup = ({ children }) => {
  return <div className="btn-group">{children}</div>;
};
export const Button = ({ children, type, style, onClick }) => {
  return (
    <button className={"btn " + type} style={style} onClick={onClick}>
      {children}
    </button>
  );
};
