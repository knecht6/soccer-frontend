import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart(props) {
  const data = {
    display: false,
    labels: [props.winner.team_name, props.losser.team_name],
    datasets: [
      {
        data: [
          Math.round(props.winner.percentage),
          Math.round(props.losser.percentage),
        ],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#d3415e", "#2785c4"],
      },
    ],
  };
  return <Doughnut data={data} legend={{ display: false }}/>;
}
