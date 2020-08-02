import React from "react";

export default function ListTeams({ children, classHover }) {
  return (
    <div className={classHover}>
      <ul>{children}</ul>
    </div>
  );
}
