"use client";

import ReactApexChart from "react-apexcharts";
import { CVDto } from "@/lib/dto/cv.dto";
import { dismissStatsPerSeason } from "./util";

type JobsDismissChartProps = {
  className?: string;
  data: CVDto["jobs"];
};

export default function JobsDismissChart(props: JobsDismissChartProps) {
  const state = {
    series: dismissStatsPerSeason(props.data),
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Зима", "Весна", "Лето", "Осень"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <ReactApexChart
      className={props.className}
      options={state.options}
      series={state.series}
      type="pie"
      height={350}
    />
  );
}
