import React from "react";

export default function Year({ name, team, handleTeam }) {
  return (
    <li className="item-year" onClick={(e) => handleTeam(team, name)}>
      {name}
    </li>
  );
}
