"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Jobschart from "./jobs-chart";
import CVStatsBlock from "./cv-stats-block";
import { DataProps } from "./util";
import { CVDto } from "@/lib/dto/cv.dto";
import moment from "moment";
import JobsDismissChart from "./jobs-dismiss-chart";

type Tabs = "chart" | "text" | "dismiss";

type CVStatsProps = {
  data: CVDto["jobs"];
};

const data1: DataProps["data"] = [
  {
    company: "Raiffeisenbank",
    position: "Программист Java",
    range: [new Date("2017-12-01").getTime(), new Date("2021-10-01").getTime()],
    description: `Разработка масштабируемого веб-приложения для управления складскими операциями в транспортной компании.

    Основные задачи и обязанности:
    Разработка и поддержка микросервисов, включая полный цикл от проектирования до развертывания и поддержки продакшн-окружения.
    Рефакторинг существующего кода для повышения эффективности, масштабируемости и поддерживаемости системы.
    Создание юнит и интеграционных тестов для обеспечения стабильности и качества продукта.
    Проведение код-ревью для улучшения качества кода и обмена знаниями внутри команды.
    
    Ключевые достижения:
    Реализация и оптимизация микросервиса для управления поступлением грузов, включая разработку API и баз данных для хранения информации о грузах.
    Разработка и интеграция сервиса уведомлений для информирования клиентов о статусах их запросов через API.
    Создание и поддержка микросервиса каталога складских позиций, управление каталогом товаров.
    
    Java 11, Spring, Kafka, CI/CD, PostgreSQL, Jenkins,Grafana, Git, микросервисы
    
    `,
  },
  {
    company: "Tinkoff",
    position: "Automation QA",
    range: [new Date("2021-10-01").getTime(), new Date().getTime()],
    description: `Development of in house CRM system for the needs of the bank. Api-first approach. Dividing the
    monolith into microservices. Implementation of cross-service integrations.
    Writing spring starters. Participated in the construction of Gitlab pipelines. Writing
    unit/integration/unit tests. Scrum work
    - Java 11/21;
    - Spring Boot;
    - OpenAPI;
    - TestContainers;
    - MapStruct;
    - Hibernate;
    - Liquibase
    - PostgreSQL 12/15;
    - JUnit 5;
    - Gradle.
    `,
  },
];

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
              d.end > 0 ? moment(d.end).format("MMMM YYYY") : "по наст. время";

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
