import ClientOnly from "@/components/client-only";
import Jobschart, { JobsChartProps } from "@/components/cv/jobs-chart";
import { Button } from "@/components/ui/button";
import { mdiCity, mdiEarth, mdiEmail, mdiPhone } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import Link from "next/link";

const data: JobsChartProps["data"] = [
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

export default function ViewCVPage() {
  return (
    <div className="pt-4 flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">
            Шмураков Константин Русланович
          </h1>
          <p className="text-sm text-muted-foreground">
            Мужчина, 19 лет (дата рождения 02.05.2005)
          </p>
        </div>
        <div className="actions flex gap-2">
          <Button variant="outline">Button 1</Button>
          <Button variant="outline">Button 2</Button>
          <Button>Button 3</Button>
        </div>
      </header>
      <main className="pt-4 grid grid-cols-[1fr_200px] gap-4">
        <div className="row-span-2 flex flex-col gap-6">
          <div className="grid grid-cols-3">
            <div className="flex flex-col">
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                Контактные данные
              </h4>
              <Link href="tel:79493432276" className="pt-2 align-middle">
                <Icon
                  path={mdiPhone}
                  size={1}
                  color="#008aff"
                  className="inline"
                />
                <span className="pl-2 text-sm">+7 (949) 343-22-76</span>
              </Link>
              <Link
                href="mailto:kostya.shmurakov@mail.ru"
                className="pt-2 align-middle "
              >
                <Icon
                  path={mdiEmail}
                  size={1}
                  color="#008aff"
                  className="inline"
                />
                <span className="pl-2 text-sm">kostya.shmurakov@mail.ru</span>
              </Link>
            </div>
            <div className="flex flex-col">
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                Место проживания
              </h4>
              <div className="pt-2 align-middle">
                <Icon
                  path={mdiEarth}
                  size={1}
                  color="#008aff"
                  className="inline"
                />
                <span className="pl-2 text-sm">Страна: Россия</span>
              </div>
              <div className="pt-2 align-middle">
                <Icon
                  path={mdiCity}
                  size={1}
                  color="#008aff"
                  className="inline"
                />
                <span className="pl-2 text-sm">Город: Москва</span>
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                ??????????
              </h4>
              <div className="pt-2 align-middle">
                <Icon
                  path={mdiEarth}
                  size={1}
                  color="#008aff"
                  className="inline"
                />
                <span className="pl-2 text-sm">???????</span>
              </div>
              <div className="pt-2 align-middle">
                <Icon
                  path={mdiCity}
                  size={1}
                  color="#008aff"
                  className="inline"
                />
                <span className="pl-2 text-sm">????????</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <ClientOnly>
              <Jobschart data={data} />
            </ClientOnly>
            <p className="text-xs text-muted-foreground self-end">
              Нажмите для подробной информации
            </p>
          </div>
        </div>
        <div>
          <Image
            className="rounded"
            width="200"
            height="300"
            src="/images/user-placeholder.png"
            alt="Фотография претендента"
          />
        </div>
      </main>
    </div>
  );
}