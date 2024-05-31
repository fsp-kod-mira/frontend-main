"use client";

import ReactApexChart from "react-apexcharts";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { selectColorFromHash } from "@/lib/utils";
import { DataProps } from "./util";

export default function Jobschart(props: DataProps) {
  const [alertOpened, setAlertOpened] = useState(false);
  const [job, setJob] = useState<DataProps["data"][0]>();

  const state = {
    series: [
      {
        data: props.data.map((e) => ({
          x: e.company,
          y: e.range,
          fillColor: selectColorFromHash(e.range),
        })),
      },
    ],
    options: {
      chart: {
        height: 200,
        type: "rangeBar",
        events: {
          click: (event: any, chartContext: any, config: any) => {
            if (config.dataPointIndex == -1) return;
            const job = props.data[config.dataPointIndex];
            setJob(job);
            setAlertOpened(true);
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val: any, opts: any) => {
          return props.data[opts.dataPointIndex].position;
        },
        style: {
          colors: ["#f3f4f5", "#fff"],
        },
      },
      xaxis: {
        type: "datetime",
      },
    },
  };

  return (
    <>
      <ReactApexChart
        className={props.className}
        // @ts-ignore
        options={state.options}
        series={state.series}
        type="rangeBar"
        height={350}
      />

      <Dialog open={alertOpened} onOpenChange={setAlertOpened}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {job?.company} - {job?.position}
            </DialogTitle>
            <DialogDescription>Просмотр информации</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4 scroll-m-20 whitespace-pre-line max-h-96 overflow-auto">
            {job?.description}
          </div>
          <DialogFooter>
            <Button
              type="submit"
              variant="outline"
              onClick={(e) => setAlertOpened(false)}
            >
              Закрыть
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
