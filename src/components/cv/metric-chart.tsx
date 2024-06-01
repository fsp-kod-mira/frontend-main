"use client";

import ReactApexChart from "react-apexcharts";

type MetricChartProps = {
  data: number[];
  dot: { x: number; y: number };
};

export default function MetricChart(props: MetricChartProps) {
  const state = {
    series: [
      {
        name: "Метрика",
        data: props.data,
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
        text: "Перспективность кандидата",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        labels: {
          show: true,
        },
      },
      annotations: {
        points: [
          {
            ...props.dot,
            marker: {
              size: 6,
              fillColor: "#fff",
              strokeColor: "#2698FF",
              radius: 2,
            },
            label: {
              borderColor: "#22c55e",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#22c55e",
              },

              text: props.dot.y,
            },
          },
        ],
      },
    },
  };
  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="line"
      height={350}
    />
  );
}
