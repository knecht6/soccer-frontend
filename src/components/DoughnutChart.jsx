import React, { useEffect } from "react";
import { Chart } from "chart.js";

export default function DoughnutChart({
  matchFor,
  duration,
  localColor,
  visitColor,
}) {
  useEffect(() => {
    var ctx = document.querySelector("#graph").getContext("2d");
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [matchFor.visitTeam.team_name, matchFor.localTeam.team_name],
        datasets: [
          {
            backgroundColor: [visitColor.Vibrant.hex, localColor.Vibrant.hex],
            borderColor: "hsla(0,0%,0%,0)",
            data: [
              matchFor.visitTeam.percentage,
              matchFor.localTeam.percentage,
            ],
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        animation: {
          duration: duration,
        },
      },
    });
  }, [duration, localColor.Vibrant.hex, matchFor.localTeam.percentage, matchFor.localTeam.team_name, matchFor.visitTeam.percentage, matchFor.visitTeam.team_name, visitColor.Vibrant.hex]);
  return <canvas id="graph"></canvas>;
}
