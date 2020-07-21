import React from "react";

export default function TeamSelected({ team, label, reset }) {
  return team ? (
    <>
      <img
        className="image-lr"
        src={team.team.img_team}
        alt={team.team.team_name}
      />
      <div class="selected-team">
        <div class="selected-team-name">{team.team.team_name}</div>
        <div class="selected-team-name">{team.season}</div>
        <button class="btn-close" type="button" onClick={reset} />
      </div>
    </>
  ) : (
    <>
      <img class="image-lr" alt={label} />
      <div class="selected-team">
        <div class="selected-team-name">{label}</div>
        <div class="selected-team-name">Season</div>
      </div>
    </>
  );
}
