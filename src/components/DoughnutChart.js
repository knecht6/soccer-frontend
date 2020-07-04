import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart({matchFor}) {
  console.log(matchFor);
  const data = {
    display: false,
    labels:
      matchFor.winner.side === "visit"
        ? [matchFor.winner.team_name, matchFor.losser.team_name]
        : [matchFor.losser.team_name, matchFor.winner.team_name],
    datasets: [
      {
        data:
          matchFor.winner.side === "visit"
            ? [
                Math.round(matchFor.winner.percentage),
                Math.round(matchFor.losser.percentage),
              ]
            : [
                Math.round(matchFor.losser.percentage),
                Math.round(matchFor.winner.percentage),
              ],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#d3415e", "#2785c4"],
      },
    ],
  };
  return <Doughnut data={data} legend={{ display: false }} />;
}