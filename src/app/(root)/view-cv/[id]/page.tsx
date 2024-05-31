import ClientOnly from "@/components/client-only";
import { Button } from "@/components/ui/button";
import {
  mdiBriefcase,
  mdiCity,
  mdiEarth,
  mdiEmail,
  mdiFolder,
  mdiPhone,
  mdiStar,
} from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import Link from "next/link";
import CVStats from "@/components/cv/cv-stats";
import useRepository from "@/hooks/repository";
import moment from "moment";
import { totalJobTime } from "@/components/cv/util";
import "moment/locale/ru";

import "./style.css";
import CVActionDropdown from "@/components/cv/cv-action-dropdown";
import { Fragment } from "react";

export default async function ViewCVPage({
  params,
}: {
  params: { id: string };
}) {
  moment.locale("ru");

  async function addToFavorite(id: string, state: boolean) {
    "use server";

    const { api } = useRepository();
    await api.cv.favorite(id, state);
  }

  const { api } = useRepository();
  const cv = await api.cv.get(params.id);
  const birthday = moment(cv.birthday).format("DD.MM.YYYY");
  const age = moment().diff(cv.birthday, "years");

  const jobTime = moment.duration(totalJobTime(cv.jobs)).humanize();
  const addToFavoriteCallback = addToFavorite.bind(
    null,
    params.id,
    !cv.favorite
  );

  return (
    <div className="pt-4 flex flex-col gap-4">
      <header className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">
            {cv.lastName} {cv.firstName} {cv.middleName}
          </h1>
          <p className="text-sm text-muted-foreground">
            {cv.gender}, {age} лет (дата рождения {birthday})
          </p>
        </div>
        <div className="actions flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/view-cv">Назад</Link>
          </Button>
          <form action={addToFavoriteCallback}>
            <Button variant={cv.favorite ? "default" : "outline"}>
              <Icon path={mdiStar} size={1} className="pr-2" />
              {cv.favorite ? "В избранном" : "В избранное"}
            </Button>
          </form>

          <CVActionDropdown />
        </div>
      </header>
      <main className="pt-4 grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4">
        <div className="order-2 md:order-1 row-span-2 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0">
            <div className="flex flex-col">
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-gray-600">
                Контактные данные
              </h4>
              <Link href={`tel:${cv.phone}`} className="pt-2 align-middle">
                <Icon
                  path={mdiPhone}
                  size={1}
                  color="#008aff"
                  className="inline"
                />
                <span className="pl-2 text-sm">{cv.phone}</span>
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
                <span className="pl-2 text-sm">{cv.email}</span>
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
                <span className="pl-2 text-sm">Страна: {cv.country}</span>
              </div>
              <div className="pt-2 align-middle">
                <Icon
                  path={mdiCity}
                  size={1}
                  color="#008aff"
                  className="inline"
                />
                <span className="pl-2 text-sm">
                  Город: {cv.city}
                  {cv.transfer ? " (готов переехать)" : ""}
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
                  Стаж: <b>{jobTime}</b>
                </span>
              </div>
              <div className="pt-2 align-middle">
                <Icon
                  path={mdiFolder}
                  size={1}
                  color="#008aff"
                  className="inline"
                />
                <span className="pl-2 text-sm">{cv.status}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {cv.position}
            </h4>
            <div className="text-sm pt-2 text-muted-foreground">
              Специализации:
            </div>
            <ul className="pl-4 list-inside dashed">
              {cv.specializations.map((s, i) => (
                <li className="text-sm" key={i}>
                  {s}
                </li>
              ))}
            </ul>
            <div className="text-sm">
              <span className="text-muted-foreground">Занятость: </span>
              {cv.employment.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">График работы: </span>
              {cv.schedule.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
          </div>
          <ul className="flex gap-2 text-muted-foreground">
            {cv.skills.map((s, i) => (
              <li className="text-sm p-2 bg-gray-100 rounded" key={i}>
                {s}
              </li>
            ))}
          </ul>
          <div className="flex flex-col">
            <ClientOnly>
              <CVStats data={cv.jobs} />
            </ClientOnly>
          </div>
          <div className="flex flex-col">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-gray-600">
              Образование
            </h4>
            <div className="pt-2 grid grid-cols-[120px_1fr] items-center gap-4 text-muted-foreground">
              {cv.education.map((e, i) => (
                <Fragment key={i}>
                  <p className="border-r pr-[40px]">{e.years}</p>
                  <div className="pl-[36px] flex flex-col">
                    <p className="font-bold">{e.name}</p>
                    <p>{e.description}</p>
                  </div>
                </Fragment>
              ))}
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
