"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import Icon from "@mdi/react";
import { mdiUnfoldMoreHorizontal } from "@mdi/js";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../ui/command";

const sortVariants = [
  {
    value: "metric-desc",
    label: "По рейтингу (убыв.)",
  },
  {
    value: "metric-asc",
    label: "По рейтингу (возр.)",
  },
];

export default function CVSortSelect() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("metric-desc");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {sortVariants.find((variant) => variant.value === value)?.label}
          <Icon path={mdiUnfoldMoreHorizontal} size={0.8} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {sortVariants.map((variant) => (
                <CommandItem
                  key={variant.value}
                  value={variant.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {variant.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
