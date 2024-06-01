"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Badge } from "../ui/badge";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

type DataItem = {
  id: number;
  label: string;
};

type InputMultipleProps = {
  className?: string;
  tooltip: string;
  data: DataItem[];
  onChangeData?: (data: number[]) => void;
};

export default function InputMultiple(props: InputMultipleProps) {
  const [data, setData] = useState<InputMultipleProps["data"]>([]);

  const addItem = (id: number) => {
    if (data.find((d) => d.id === id)) return;
    const item = props.data.find((d) => d.id === id)!;
    setData([...data, item]);

    props.onChangeData?.([...data.map((d) => d.id), id]);
  };
  const removeItem = (id: number) => {
    setData(data.filter((s) => s.id != id));
    props.onChangeData?.(data.filter((s) => s.id != id).map((d) => d.id));
  };

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="mt-4" type="button">
            {props.tooltip}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Поиск" />
            <CommandEmpty>Упс.. Результатов не найдено</CommandEmpty>
            <CommandList>
              {props.data.map((f) => (
                <CommandItem
                  key={f.id}
                  value={f.id.toString()}
                  onSelect={(value) => addItem(+value)}
                >
                  {f.label}
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <ul className="pt-4 flex gap-2">
        {data.map((d) => (
          <li key={d.id}>
            <Badge variant="secondary">
              {d.label}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem(d.id)}
              >
                <Icon
                  className="pl-1 cursor-pointer"
                  path={mdiClose}
                  size={0.7}
                />
              </Button>
            </Badge>
          </li>
        ))}
      </ul>
    </>
  );
}
