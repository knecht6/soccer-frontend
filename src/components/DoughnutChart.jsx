import React, { useEffect } from "react";
import { Chart } from "chart.js";

export default function DoughnutChart({ matchFor, duration }) {
  useEffect(() => {
    var ctx = document.querySelector("#graph").getContext("2d");
    var gradientStrokeLocal = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStrokeLocal.addColorStop(0, "#00eeff");
    gradientStrokeLocal.addColorStop(0.5, "#00eccc");
    gradientStrokeLocal.addColorStop(0.9, "#00d889");
    gradientStrokeLocal.addColorStop(1, "#00ee55");
    var gradientStrokeVisit = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStrokeVisit.addColorStop(0, "#0054ff");
    gradientStrokeVisit.addColorStop(0.3, "#3b3cf1");
    gradientStrokeVisit.addColorStop(0.7, "#6e47e5");
    gradientStrokeVisit.addColorStop(1, "#914fdf");
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [matchFor.visitTeam.team_name, matchFor.localTeam.team_name],
        datasets: [
          {
            backgroundColor: [gradientStrokeVisit, gradientStrokeLocal],
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
  });
  return <canvas id="graph" ></canvas>;
}
