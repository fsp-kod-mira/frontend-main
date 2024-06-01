"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Jobschart from "./jobs-chart";
import CVStatsBlock from "./cv-stats-block";
import { CVDto } from "@/lib/dto/cv.dto";
import moment from "moment";
import JobsDismissChart from "./jobs-dismiss-chart";

type Tabs = "chart" | "text" | "dismiss";

type CVStatsProps = {
  data: CVDto["jobs"];
};

export default function CVStats(props: CVStatsProps) {
  const [tab, setTab] = useState<Tabs>("chart");

  const tabSelector = (
    <div className="flex items-center self-end text-sm text-muted-foreground">
      <p>Просмотреть:</p>
      <Button
        variant="link"
        className={tab === "chart" ? "" : "text-muted-foreground"}
        size="sm"
        onClick={() => setTab("chart")}
      >
        Таймлайн
      </Button>
      <Button
        variant="link"
        className={tab === "dismiss" ? "" : "text-muted-foreground"}
        size="sm"
        onClick={() => setTab("dismiss")}
      >
        Увольнения
      </Button>
      <Button
        variant="link"
        className={tab === "text" ? "" : "text-muted-foreground"}
        size="sm"
        onClick={() => setTab("text")}
      >
        Текст
      </Button>
    </div>
  );

  if (tab == "chart") {
    return (
      <>
        {tabSelector}
        <div className="flex flex-col lg:flex-row">
          <CVStatsBlock className="max-w-80 pr-6 py-4" data={props.data} />
          <Jobschart className="flex-grow" data={props.data} />
        </div>
        <p className="text-xs text-muted-foreground self-end">
          Нажмите для подробной информации
        </p>
      </>
    );
  } else if (tab == "dismiss") {
    return (
      <>
        {tabSelector}
        <div className="flex flex-col lg:flex-row">
          <CVStatsBlock className="max-w-80 pr-6 py-4" data={props.data} />
          <JobsDismissChart className="flex-grow" data={props.data} />
        </div>
      </>
    );
  } else {
    return (
      <>
        {tabSelector}
        <div className="pt-2 grid grid-cols-[200px_1fr] items-center gap-4">
          {props.data.map((d) => {
            const startStr = moment(d.start).format("MMMM YYYY");
            const endStr =
              +moment(d.end).format("x") > 0
                ? moment(d.end).format("MMMM YYYY")
                : "по наст. время";

            return (
              <>
                <p className="border-r pr-[40px] text-muted-foreground">
                  {startStr} - {endStr}
                </p>
                <div className="pl-[36px] flex flex-col">
                  <p className="font-bold">{d.position}</p>
                  <p>{d.company}</p>
                  <p className="pt-2 text-muted-foreground whitespace-pre-line">
                    {d.description}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}
