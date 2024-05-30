import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";

type InputSelectProps = {
  className?: string;
  name: string;
  data: {
    id: number;
    label: string;
  }[];
  onChangeData?: (data: number[]) => void;
};

export default function InputSelect(props: InputSelectProps) {
  const data = new Set<number>();
  const toggleItem = (id: number, state: boolean) => {
    if (state) {
      data.add(id);
    } else {
      data.delete(id);
    }

    props.onChangeData?.(Array.from(data));
  };

  return (
    <div className={cn("space-y-2", props.className)}>
      {props.data.map((d, index) => (
        <div className="flex items-center gap-2" key={index}>
          <Checkbox
            id={`${props.name}.${index}`}
            onCheckedChange={(state) => toggleItem(d.id, state as boolean)}
          />
          <label
            htmlFor={`${props.name}.${index}`}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {d.label}
          </label>
        </div>
      ))}
    </div>
  );
}
