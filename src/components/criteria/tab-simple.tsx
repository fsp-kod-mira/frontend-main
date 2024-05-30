import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { z } from "zod";
import editCriteriaForm from "@/lib/forms/edit-criteria.form";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import InputSelect from "./input-select";
import InputMultiple from "./input-multiple";

type TabSimpleProps = {
  form: UseFormReturn<z.infer<typeof editCriteriaForm>, any, undefined>;
};
type Labeled = {
  id: number;
  label: string;
};

const cities: Labeled[] = [
  {
    id: 1,
    label: "Донецк",
  },
  {
    id: 2,
    label: "Москва",
  },
  {
    id: 3,
    label: "Енакиево",
  },
];

const education: Labeled[] = [
  {
    id: 1,
    label: "Высшее",
  },
  {
    id: 2,
    label: "Неполное высшее",
  },
  {
    id: 3,
    label: "Среднее",
  },
  {
    id: 4,
    label: "Бакалавр",
  },
  {
    id: 5,
    label: "Магистр",
  },
];
const timetable: Labeled[] = [
  {
    id: 1,
    label: "Сменный график",
  },
  {
    id: 2,
    label: "Гибкий график",
  },
  {
    id: 3,
    label: "Удаленная работа",
  },
];

const experience: Labeled[] = [
  {
    id: 1,
    label: "Без опыта",
  },
  {
    id: 2,
    label: "До 1 года",
  },
  {
    id: 3,
    label: "1-3 лет",
  },
  {
    id: 4,
    label: "От 5 лет",
  },
];

const stack: Labeled[] = [
  { id: 1, label: "Go" },
  { id: 2, label: "Python" },
  { id: 3, label: "Java" },
  { id: 4, label: "C#" },
  { id: 5, label: "TypeScript" },
];

export default function TabSimple(props: TabSimpleProps) {
  const setValue = (
    field: Parameters<typeof props.form.setValue>[0],
    data: number[]
  ) => {
    props.form.setValue(field, data);
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Возраст</AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center space-x-2">
            <Checkbox id="age" />
            <label
              htmlFor="age"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Включить
            </label>
          </div>
          <div className="pt-4 flex items-center space-x-2">
            <FormField
              control={props.form.control}
              name="age.min"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>От</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={props.form.control}
              name="age.max"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>До</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Город</AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center space-x-2">
            <Checkbox id="city" />
            <label
              htmlFor="city"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Включить
            </label>
          </div>
          <InputMultiple
            data={cities}
            tooltip="Выбрать города"
            onChangeData={(data) => setValue("cities", data)}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Образование</AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center space-x-2">
            <Checkbox id="education" />
            <label
              htmlFor="education"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Включить
            </label>
          </div>
          <InputSelect
            className="pt-4 space-y-2"
            name="education"
            data={education}
            onChangeData={(data) => setValue("education", data)}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>График работы</AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center space-x-2">
            <Checkbox id="timetable" />
            <label
              htmlFor="timetable"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Включить
            </label>
          </div>
          <InputSelect
            className="pt-4 space-y-2"
            name="timetable"
            data={timetable}
            onChangeData={(data) => setValue("timetable", data)}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Опыт работы</AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center space-x-2">
            <Checkbox id="experience" />
            <label
              htmlFor="experience"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Включить
            </label>
          </div>
          <InputSelect
            className="pt-4 space-y-2"
            name="experience"
            data={experience}
            onChangeData={(data) => setValue("experience", data)}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Требуемые технологии</AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center space-x-2">
            <Checkbox id="stack" />
            <label
              htmlFor="stack"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Включить
            </label>
          </div>
          <InputMultiple
            data={stack}
            tooltip="Выбрать технологии"
            onChangeData={(data) => setValue("stack", data)}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
