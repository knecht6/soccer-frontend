import React from "react";

export default function League({
  id,
  name,
  src,
  children,
  onHover,
  handleClassHover,
}) {
  return (
    <div
      className="card-item"
      id={id}
      data-name={name}
      onMouseEnter={() => {
        onHover(id, name);
      }}
      onMouseLeave={() => {
        handleClassHover(false, id);
      }}
    >
      <img className="image" src={src} alt={name} />
      {children}
    </div>
  );
}
