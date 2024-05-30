import CVCategories from "@/components/cv/cv-categories";
import CVSortSelect from "@/components/cv/cv-sort-select";
import CVTable from "@/components/cv/cv-table";
import { Button } from "@/components/ui/button";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";

export default function ViewCVPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">
          Соискатели на должность &quot;Frontend-разработчик&quot;
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
