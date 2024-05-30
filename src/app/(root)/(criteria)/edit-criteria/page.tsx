"use client";

import TabSimple from "@/components/criteria/tab-simple";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EditCriteriaDto } from "@/lib/dto/edit-criteria.dto";
import editCriteriaForm from "@/lib/forms/edit-criteria.form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function EditCriteriaPage() {
  const form = useForm<z.infer<typeof editCriteriaForm>>({
    resolver: zodResolver(editCriteriaForm),
    defaultValues: {
      age: {
        min: undefined,
        max: undefined,
      },
      cities: [],
      education: [],
      timetable: [],
      experience: [],
      stack: [],
    },
  });

  const handleSubmit: SubmitHandler<EditCriteriaDto> = async (data) => {
    console.log("ok");
    console.log(data);
  };
  const handleInvalid: SubmitErrorHandler<EditCriteriaDto> = async (data) => {
    console.log("fail");
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">
          Редактирование шаблона &quot;Frontend-разработчик&quot;
        </h1>
        <div className="actions flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/">Назад</Link>
          </Button>
          <Button form="form" type="submit">
            Сохранить
          </Button>
        </div>
      </header>
      <main>
        <Form {...form}>
          <form
            id="form"
            onSubmit={form.handleSubmit(handleSubmit, handleInvalid)}
          >
            <Tabs defaultValue="simple">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="simple">Настройка</TabsTrigger>
                <TabsTrigger value="manual">Коэффициенты</TabsTrigger>
              </TabsList>
              <TabsContent value="simple">
                <TabSimple form={form} />
              </TabsContent>
              <TabsContent value="manual"></TabsContent>
            </Tabs>
          </form>
        </Form>
      </main>
    </div>
  );
}
