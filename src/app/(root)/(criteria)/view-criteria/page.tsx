import CriteriaTable from "@/components/criteria/criteria-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ViewCriteriaPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">
          Текущие вакансии
        </h1>
        <div className="actions flex gap-2">
          <Button asChild>
            <Link href="/edit-criteria">Создать</Link>
          </Button>
        </div>
      </header>
      <div className="grid grid-cols-[1fr] gap-4">
        <CriteriaTable />
      </div>
    </div>
  );
}
