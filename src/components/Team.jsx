import React from "react";

export default function Team({ name, src, children }) {
  return (
    <li className="item-team">
      <div className="link">
        <img className="team-image" src={src} alt={name} />
        <div className="team-name">{name}</div>
        {children}
      </div>
    </li>
  );
}
