import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type CVCategoryProps = {
  name: string;
  active?: boolean;
  children?: ReactNode;
};

function CVCategory(props: CVCategoryProps) {
  const activeClass = props.active
    ? "bg-gray-200 hover:bg-gray-300"
    : "hover:bg-gray-100";
  const className = cn("px-8 py-3 w-full block cursor-pointer", activeClass);
  return <div className={className}>{props.children}</div>;
}

export default function CVCategories() {
  return (
    <Card>
      <CVCategory name="all" active>
        Все
      </CVCategory>
      <CVCategory name="new">Новые</CVCategory>
      <CVCategory name="inprogress">Подумать</CVCategory>
      <CVCategory name="cvpass">Прошёл интервью</CVCategory>
      <CVCategory name="declined">Отказ</CVCategory>
    </Card>
  );
}
