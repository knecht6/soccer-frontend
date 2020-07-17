import React, { useEffect } from "react";
import { Chart } from "chart.js";

export default function DoughnutChart(props) {
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
        labels: ["Local Team", "Visit Team"],
        datasets: [
          {
            backgroundColor: [gradientStrokeVisit, gradientStrokeLocal],
            borderColor: "hsla(0,0%,0%,0)",
            data: [60, 40],
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        animation: {
          duration: props.duration,
        },
      },
    });
  });
  return <canvas id="graph" width="400" height="400"></canvas>;
}
