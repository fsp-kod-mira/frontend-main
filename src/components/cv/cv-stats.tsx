"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Jobschart, { JobsChartProps } from "./jobs-chart";
import ClientOnly from "../client-only";

type Tabs = "chart" | "stats" | "text";

const data1: JobsChartProps["data"] = [
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

export default function CVStats() {
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
        className={tab === "stats" ? "" : "text-muted-foreground"}
        size="sm"
        onClick={() => setTab("stats")}
      >
        Статистика
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
        <ClientOnly>
          <Jobschart data={data1} />
        </ClientOnly>
        <p className="text-xs text-muted-foreground self-end">
          Нажмите для подробной информации
        </p>
      </>
    );
  } else {
    return <>{tabSelector}</>;
  }

  // return ()
}