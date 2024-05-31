"use client";

import { month } from "@/lib/utils";
import ReactApexChart from "react-apexcharts";
import { DataProps, dismissStats } from "./util";

export default function JobsDismissChart(props: DataProps) {
  const state = {
    series: [
      {
        name: "Увольнений",
        data: dismissStats(props.data),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Статистика увольнений",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: month,
      },
    },
  };

  return (
    <ReactApexChart
      className={props.className}
      options={state.options}
      series={state.series}
      type="line"
      height={350}
    />
  );
}
