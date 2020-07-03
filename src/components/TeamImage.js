import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function TeamImage({ name, src, color }) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        style={{ marginTop: 15, height: "25%", width: "auto" }}
      />
    );
  } else {
    return (
      <CircularProgress color={color} size={80} style={{ marginTop: 50 }} />
    );
  }
}
