import React from "react";

export default function League({id, name, src, children, onHover }) {
  return (
    <div className="card-item" id={id} data-name={name} onMouseEnter={onHover}>
      <img className="image" src={src} alt={name} />
      {children}
    </div>
  );
}
