import React from "react";
import "../assets/css/progress.css";

export default function ProgressCircle(props) {
  const { radius, stroke, progress } = props;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="white"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        color="white"
        dy=".3em"
        fontFamily="Bebas Neue"
        fontSize="2em"
        fill="white"
      >
        {props.legend}
      </text>
    </svg>
  );
}
