import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart({ matchFor }) {
  const data = {
    display: false,
    labels: [matchFor.teamRight.team_name, matchFor.teamLeft.team_name],
    datasets: [
      {
        data: [matchFor.teamRight.percentage, matchFor.teamLeft.percentage],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#d3415e", "#2785c4"],
      },
    ],
  };
  return <Doughnut data={data} legend={{ display: false }} />;
}
