import React from "react";

export default function Year({ name, team, handleTeam, leagueId }) {
  return (
    <li
      className="item-year"
      onClick={() => {
        handleTeam(team, name, leagueId);
      }}
    >
      {name}
    </li>
  );
}
