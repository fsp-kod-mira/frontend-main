"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SignUpDto } from "@/lib/dto/sign-up.dto";
import signUpForm from "@/lib/forms/sign-up.form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import useRepository from "@/hooks/repository";
import authService from "@/services/auth.service";
import authStorageService from "@/services/auth-storage.service";
import userStorageService from "@/services/user-storage.service";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function SignUpForm() {
  const form = useForm<z.infer<typeof signUpForm>>({
    resolver: zodResolver(signUpForm),
    defaultValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      password: "",
      confirm: "",
      role: "recruiter",
    },
  });
  const { api } = useRepository();
  const { toast } = useToast();
  const router = useRouter();

  const [tab, setTab] = useState<string>("general");

  const handleSubmit: SubmitHandler<SignUpDto> = async (data) => {
    try {
      const authResult = await api.users.create(data);
      authStorageService.set(authResult);

      const user = await authService.getMe(authResult);
      userStorageService.set(user);

      toast({
        title: "Добро пожаловать!",
        description: `Мы рады тебя видеть, ${user.firstName}!`,
      });
      router.push("/");
    } catch (e) {
      // @ts-ignore
      if (e.response?.status == 409) {
        form.setError("email", { message: "Email уже используется!" });
        return;
      }

      console.error(e);
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "При регистрации произошла неизвестная ошибка",
      });
    }
  };

  return (
    <Tabs
      defaultValue="general"
      className="w-[400px]"
      value={tab}
      onValueChange={setTab}
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="general">Общая информация</TabsTrigger>
        <TabsTrigger value="auth">Личные данные</TabsTrigger>
      </TabsList>
      <Card className="mt-2 min-w-96">
        <CardHeader>
          <CardTitle>Регистрация</CardTitle>
          <CardDescription>
            Добро пожаловать! Пожалуйста, представьтесь!
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            autoComplete="off"
            id="register_form"
          >
            <TabsContent value="general">
              <CardContent className="space-y-2">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Фамилия</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Иванов"
                          {...field}
                          autoComplete="off"
                        />
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
                        <Input
                          placeholder="Иван"
                          {...field}
                          autoComplete="off"
                        />
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
                        <Input
                          placeholder="Иванович"
                          {...field}
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button
                  type="button"
                  className="w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600"
                  onClick={() => setTab("auth")}
                >
                  Далее
                </Button>
              </CardFooter>
            </TabsContent>
            <TabsContent value="auth">
              <CardContent className="space-y-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Электронная почта</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="user@example.com"
                          {...field}
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mt-2">
                      <FormLabel>Пароль</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="●●●●●●●●"
                          type="password"
                          {...field}
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirm"
                  render={({ field }) => (
                    <FormItem className="mt-2">
                      <FormLabel>Подтвердите пароль</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="●●●●●●●●"
                          type="password"
                          {...field}
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Должность</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите должность" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="recruiter">Рекрутёр</SelectItem>
                          <SelectItem value="hiring_manager">
                            Нанимающий менеджер
                          </SelectItem>
                          <SelectItem value="resource_manager">
                            Ресурсный менеджер
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600"
                >
                  Регистрация
                </Button>
              </CardFooter>
            </TabsContent>
          </form>
        </Form>
      </Card>
    </Tabs>
  );
}
