import React from "react";

export default function TeamSelected({ team, label, seasonLabel, reset }) {
  return team ? (
    <>
      <img
        className="image-lr"
        src={team.team.img_team}
        alt={team.team.team_name}
      />
      <div className="selected-team">
        <div className="selected-team-name">{team.team.team_name}</div>
        <div className="selected-team-name">{team.season}</div>
        <button className="btn-close" type="button" onClick={reset} />
      </div>
    </>
  ) : (
    <>
      <img className="image-lr" alt={label} />
      <div className="selected-team">
        <div className="selected-team-name">{label}</div>
        <div className="selected-team-name">{seasonLabel}</div>
      </div>
    </>
  );
}
