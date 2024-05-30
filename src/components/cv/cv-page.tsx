import Link from "next/link";
import { Button } from "../ui/button";
import CVSortSelect from "./cv-sort-select";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import CVCategories from "./cv-categories";
import CVTable from "./cv-table";

type CVPageProps = {
  vacant?: string;
};

export default function CVPage(props: CVPageProps) {
  const vacant_s = props.vacant ? `на должность "${props.vacant}"` : "(список)";
  return (
    <div className="flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">
          Соискатели {vacant_s}
        </h1>
        <div className="actions flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/">Назад</Link>
          </Button>
          <CVSortSelect />
          <Button variant="outline">Фильтры (0)</Button>
          <Button variant="outline" size="icon">
            <Icon path={mdiMagnify} size={0.9} />
          </Button>
        </div>
      </header>
      <div className="grid grid-cols-[300px_1fr] gap-4">
        <CVCategories />
        <CVTable />
      </div>
    </div>
  );
}
