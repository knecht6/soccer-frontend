import React from "react";

export default function ListTeams({ children }) {
  return (
    <div className="list-teams">
      <ul>{children}</ul>
    </div>
  );
}
