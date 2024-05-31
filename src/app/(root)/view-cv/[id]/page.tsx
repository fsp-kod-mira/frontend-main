import ClientOnly from "@/components/client-only";
import Jobschart from "@/components/cv/jobs-chart";
import { Button } from "@/components/ui/button";
import { mdiBriefcase, mdiCity, mdiEarth, mdiEmail, mdiPhone } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import Link from "next/link";

import "./style.css";
import CVStats from "@/components/cv/cv-stats";

export default function ViewCVPage() {
  return (
    <div className="pt-4 flex flex-col gap-4">
      <header className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">
            Шмураков Константин Русланович
          </h1>
          <p className="text-sm text-muted-foreground">
            Мужчина, 19 лет (дата рождения 02.05.2005)
          </p>
        </div>
        <div className="actions flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/view-cv">Назад</Link>
          </Button>
          <Button variant="outline">Button 2</Button>
          <Button>Button 3</Button>
        </div>
      </header>
      <main className="pt-4 grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4">
        <div className="order-2 md:order-1 row-span-2 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0">
            <div className="flex flex-col">
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-gray-600">
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
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-gray-600">
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
                <span className="pl-2 text-sm">
                  Город: Москва (готов переехать){" "}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-gray-600">
                Доп. информация
              </h4>
              <div className="pt-2 align-middle">
                <Icon
                  path={mdiBriefcase}
                  size={1}
                  color="#008aff"
                  className="inline"
                />
                <span className="pl-2 text-sm">
                  Стаж: <b>1 год и 5 месяцев</b>
                </span>
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
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Frontend-разработчик
            </h4>
            <div className="text-sm pt-2 text-muted-foreground">
              Специализации:
            </div>
            <ul className="pl-4 list-inside dashed">
              <li className="text-sm">Программист, разработчик</li>
            </ul>
            <div className="text-sm">
              <span className="text-muted-foreground">Занятость: </span>
              <span>полная занятость</span>
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">График работы: </span>
              <span>полная занятость</span>
            </div>
          </div>
          <ul className="flex gap-2 text-muted-foreground">
            <li className="text-sm p-2 bg-green-200 rounded">Java</li>
            <li className="text-sm p-2 bg-gray-100 rounded">Java</li>
            <li className="text-sm p-2 bg-gray-100 rounded">Java</li>
            <li className="text-sm p-2 bg-gray-100 rounded">Java</li>
          </ul>
          <div className="flex flex-col">
            <ClientOnly>
              <CVStats />
            </ClientOnly>
          </div>
          <div className="flex flex-col">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-gray-600">
              Высшее образование
            </h4>
            <div className="pt-2 grid grid-cols-[120px_1fr] items-center gap-4 text-muted-foreground">
              <p className="border-r pr-[40px]">2014</p>
              <div className="pl-[36px] flex flex-col">
                <p className="font-bold">
                  Санкт-Петербургский государственный политехнический
                  университет, Санкт-Петербург
                </p>
                <p>
                  Институт физики, нанотехнологий и телекоммуникаций, Квантовая
                  и оптическая электроника
                </p>
              </div>
              <p className="border-r pr-[40px]">2014</p>
              <div className="pl-[36px] flex flex-col">
                <p className="font-bold">
                  Санкт-Петербургский государственный политехнический
                  университет, Санкт-Петербург
                </p>
                <p>
                  Институт физики, нанотехнологий и телекоммуникаций, Квантовая
                  и оптическая электроника
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center order-1 md:order-2">
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
