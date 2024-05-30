import CriteriaTable from "@/components/criteria/criteria-table";
import { Button } from "@/components/ui/button";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">
          Текущие вакансии
        </h1>
        <div className="actions flex gap-2">
          <Button asChild>
            <Link href="/edit-criteria">Создать</Link>
          </Button>
          <Button variant="outline">Фильтры (0)</Button>
          <Button variant="outline" size="icon">
            <Icon path={mdiMagnify} size={0.9} />
          </Button>
        </div>
      </header>
      <div className="grid grid-cols-[1fr] gap-4">
        <CriteriaTable />
      </div>
    </div>
  );
}
