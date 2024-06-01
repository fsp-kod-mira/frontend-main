import Icon from "@mdi/react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { mdiFileDocument, mdiHelp, mdiSwapVertical, mdiTable } from "@mdi/js";

export default function CVActionDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Действия
          <Icon className="pl-1" path={mdiSwapVertical} size={0.8} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Действия</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icon className="pr-1" path={mdiHelp} size={0.9} />
            <span>Уточнить у кандидата</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icon className="pr-1" path={mdiTable} size={0.9} />
            <span>Экспорт в CSV</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon className="pr-1" path={mdiFileDocument} size={0.9} />
            <span>Экспорт в PDF</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Изменить статус</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <span>Новое</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Подумать</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Прошёл интервью</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Отказ</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
