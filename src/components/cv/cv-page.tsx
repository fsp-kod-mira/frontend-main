"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import CVSortSelect from "./cv-sort-select";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import CVCategories from "./cv-categories";
import CVTable from "./cv-table";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import userStorageService from "@/services/user-storage.service";
import { Roles } from "@/lib/role";

type CVPageProps = {
  vacant?: string;
};

export default function CVPage(props: CVPageProps) {
  const vacant_s = props.vacant ? `на должность "${props.vacant}"` : "(список)";
  const router = useRouter();

  const [role, setRole] = useState<Roles>();
  useEffect(() => {
    userStorageService.get().then((data) => {
      setRole(data!.role);
    });
  }, [setRole]);

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center">
        <h1 className="scroll-m-20 text-xl text-center md:text-left font-extrabold tracking-tight lg:text-3xl">
          Соискатели {vacant_s}
        </h1>
        <div className="actions flex gap-2 flex-col md:flex-row">
          <div className="flex justify-between items-center gap-2">
            {props.vacant ? (
              <Button variant="outline" onClick={() => router.back()}>
                Назад
              </Button>
            ) : (
              <></>
            )}
            <CVSortSelect />
          </div>
          <div className="flex justify-between items-center gap-2">
            <Button variant="outline">Фильтры (0)</Button>
            <Button className="hidden md:block" variant="outline" size="icon">
              <Icon path={mdiMagnify} size={0.9} />
            </Button>
            <Button className="flex-grow md:hidden" variant="outline">
              <Icon path={mdiMagnify} size={0.9} />
              Поиск
            </Button>
          </div>
          {role != "resource_manager" ? (
            <Button asChild>
              <Link href="/upload-cv">Загрузить резюме</Link>
            </Button>
          ) : (
            <></>
          )}
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4">
        <CVCategories />
        <CVTable />
      </div>
    </div>
  );
}
