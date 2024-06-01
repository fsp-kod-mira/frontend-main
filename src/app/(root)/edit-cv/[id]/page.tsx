"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CVDto } from "@/lib/dto/cv.dto";
import cvForm from "@/lib/forms/cv.form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

export default function EditCVPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof cvForm>>({
    resolver: zodResolver(cvForm),
    defaultValues: {
      id: "",
      uploader_id: "",
      status: "new",
      favorite: false,

      firstName: "",
      lastName: "",
      middleName: "",

      gender: "Мужчина",
      birthday: "2000-01-01",

      phone: "",
      email: "",

      country: "Россия",
      city: "Москва",
      transfer: false,

      position: "",
      specializations: [],
      employment: [],
      schedule: [],

      skills: [],

      jobs: [],
      education: [],
    },
  });

  const {
    fields: specFields,
    append: specAppend,
    remove: specRemove,
  } = useFieldArray({
    control: form.control,
    name: "specializations",
  });
  const {
    fields: jobsFields,
    append: jobsAppend,
    remove: jobsRemove,
  } = useFieldArray({
    control: form.control,
    name: "jobs",
  });
  const {
    fields: skillsFields,
    append: skillsAppend,
    remove: skillsRemove,
  } = useFieldArray({
    control: form.control,
    name: "skills",
  });
  const {
    fields: eduFields,
    append: eduAppend,
    remove: eduRemove,
  } = useFieldArray({
    control: form.control,
    name: "education",
  });

  const handleSubmit: SubmitHandler<CVDto> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center">
        <h1 className="scroll-m-20 text-xl text-center md:text-left font-extrabold tracking-tight lg:text-3xl">
          Редактирование резюме
        </h1>
        <div className="actions flex gap-2 flex-col md:flex-row">
          <div className="flex justify-between items-center gap-2">
            <Button variant="outline" onClick={() => router.back()}>
              Отмена
            </Button>
          </div>
          <Button form="form" type="submit">
            Сохранить
          </Button>
        </div>
      </header>
      <main>
        <Card>
          <CardHeader></CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                id="form"
                className="space-y-2"
                onSubmit={form.handleSubmit(handleSubmit)}
              >
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Фамилия</FormLabel>
                      <FormControl>
                        <Input placeholder="Иванов" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Иван" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="middleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Отчество</FormLabel>
                      <FormControl>
                        <Input placeholder="Отчество" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Пол</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите пол" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Мужчина">Мужчина</SelectItem>
                            <SelectItem value="Женщина">Женщина</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="birthday"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Birthday</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Номер телефона</FormLabel>
                      <FormControl>
                        <Input placeholder="71234567890" {...field} />
                      </FormControl>
                      <FormDescription>Вводите только цифры</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="user@example.com" {...field} />
                      </FormControl>
                      <FormDescription>
                        По этому адресу можно связаться с кандидатом
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Страна проживания</FormLabel>
                      <FormControl>
                        <Input placeholder="Россия" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Город</FormLabel>
                      <FormControl>
                        <Input placeholder="Москва" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="transfer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Готовность к переезду</FormLabel>
                      <FormControl>
                        <Checkbox className="ml-3" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Позиция</FormLabel>
                      <FormControl>
                        <Input placeholder="Frontend-разработчик" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="employment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Занятость</FormLabel>
                      <FormControl>
                        <ToggleGroup
                          className="flex flex-col items-start"
                          type="multiple"
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <ToggleGroupItem value="полная занятость">
                            полная занятость
                          </ToggleGroupItem>
                          <ToggleGroupItem value="частичная занятость">
                            частичная занятость
                          </ToggleGroupItem>
                          <ToggleGroupItem value="проектная работа">
                            проектная работа
                          </ToggleGroupItem>
                        </ToggleGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="schedule"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>График</FormLabel>
                      <FormControl>
                        <ToggleGroup
                          className="flex flex-col items-start"
                          type="multiple"
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <ToggleGroupItem value="полный день">
                            полный день
                          </ToggleGroupItem>
                          <ToggleGroupItem value="сменный график">
                            сменный график
                          </ToggleGroupItem>
                          <ToggleGroupItem value="гибкий график">
                            гибкий график
                          </ToggleGroupItem>
                          <ToggleGroupItem value="удалённая работа">
                            удалённая работа
                          </ToggleGroupItem>
                        </ToggleGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button
                    variant={"outline"}
                    type="button"
                    onClick={() => specAppend({})}
                  >
                    Добавить специализацию
                  </Button>
                </div>
                {specFields.map((field, index) => (
                  <Card key={field.id}>
                    <CardContent className="pt-4 space-y-2">
                      <div className="flex justify-end">
                        <Button type="button" onClick={() => specRemove(index)}>
                          Удалить
                        </Button>
                      </div>
                      <FormField
                        control={form.control}
                        name={`specializations.${index}`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Специализация</FormLabel>
                            <FormControl>
                              <Input placeholder="Специализация" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                ))}

                <div className="flex justify-end">
                  <Button
                    variant={"outline"}
                    type="button"
                    onClick={() =>
                      jobsAppend({
                        company: "",
                        position: "",
                        description: "",
                        start: "2023-06-01",
                        end: "2024-06-02",
                      })
                    }
                  >
                    Добавить место работы
                  </Button>
                </div>
                {jobsFields.map((field, index) => (
                  <Card key={field.id}>
                    <CardContent className="pt-4 space-y-2">
                      <div className="flex justify-end">
                        <Button type="button" onClick={() => jobsRemove(index)}>
                          Удалить
                        </Button>
                      </div>
                      <FormField
                        control={form.control}
                        name={`jobs.${index}.company`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Компания</FormLabel>
                            <FormControl>
                              <Input placeholder="Компания" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`jobs.${index}.position`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Позиция</FormLabel>
                            <FormControl>
                              <Input placeholder="Позиция" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`jobs.${index}.description`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Описание</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Описание" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`jobs.${index}.start`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Дата начала</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`jobs.${index}.end`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Дата окончания</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="transfer"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Checkbox className="mr-3" {...field} />
                            </FormControl>
                            <FormLabel>По настоящее время</FormLabel>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                ))}

                <div className="flex justify-end">
                  <Button
                    variant={"outline"}
                    type="button"
                    onClick={() => skillsAppend({})}
                  >
                    Добавить навык
                  </Button>
                </div>
                {skillsFields.map((field, index) => (
                  <Card key={field.id}>
                    <CardContent className="pt-4 space-y-2">
                      <div className="flex justify-end">
                        <Button
                          type="button"
                          onClick={() => skillsRemove(index)}
                        >
                          Удалить
                        </Button>
                      </div>
                      <FormField
                        control={form.control}
                        name={`skills.${index}`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Навык</FormLabel>
                            <FormControl>
                              <Input placeholder="Например, React" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                ))}

                <div className="flex justify-end">
                  <Button
                    variant={"outline"}
                    type="button"
                    onClick={() =>
                      eduAppend({
                        name: "",
                        years: "",
                        description: "",
                      })
                    }
                  >
                    Добавить образование
                  </Button>
                </div>
                {eduFields.map((field, index) => (
                  <Card key={field.id}>
                    <CardContent className="pt-4 space-y-2">
                      <div className="flex justify-end">
                        <Button type="button" onClick={() => eduRemove(index)}>
                          Удалить
                        </Button>
                      </div>
                      <FormField
                        control={form.control}
                        name={`education.${index}.name`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Наименование вуза / организации
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Наименование вуза / организации"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`education.${index}.years`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Года обучения</FormLabel>
                            <FormControl>
                              <Input placeholder="2020-2023" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`education.${index}.description`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Описание</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Описание" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                ))}
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
