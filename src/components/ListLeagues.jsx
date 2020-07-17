import React from "react";

export default function ListLeagues({ children }) {
  return (
    <main>
      <div className="cards">{children}</div>
    </main>
  );
}
