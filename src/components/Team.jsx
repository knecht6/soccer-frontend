import React from "react";

export default function Team({
  id,
  leagueId,
  name,
  src,
  handleTeam,
  children,
}) {
  return (
    <li
      className="item-team"
      onMouseEnter={(e) => {
        handleTeam(leagueId, name);
      }}
    >
      <div className="link">
        <img className="team-image" src={src} alt={name} />
        <div className="team-name">{name}</div>
        {children}
      </div>
    </li>
  );
}
