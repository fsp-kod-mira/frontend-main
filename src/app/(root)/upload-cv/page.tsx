"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import UploadCVForm from "@/components/cv/upload-cv-form";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

export default function UploadCVPage() {
  const router = useRouter();

  const [alert, setAlert] = React.useState<boolean>(false);
  const [url, setUrl] = React.useState<string>();
  const [urlPending, setUrlPending] = React.useState<boolean>(false);

  const parseHh = async () => {
    try {
      setUrlPending(true);
      const result = await fetch(`/upload-cv/parse?url=${url}`);
      console.log(result);
    } catch (e) {
    } finally {
      setAlert(false);
      setUrlPending(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-6 flex flex-col md:flex-row items-center">
        <Image
          className=""
          src="/images/cv.png"
          alt="cv"
          width={100}
          height="300"
        />
        <div className="pt-4 md:pt-0 md:pl-4">
          <CardHeader>
            <CardTitle>Загрузка резюме</CardTitle>
            <CardDescription>
              Выберите файл CV (.docx, .pdf, .rtf)
            </CardDescription>
            <div className="py-2">
              <UploadCVForm />
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button type="button" variant="outline">
                  Импорт...
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Button variant="ghost" onClick={() => setAlert(true)}>
                      hh.ru
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" onClick={() => router.back()}>
              Отмена
            </Button>
            <Button form="form" type="submit">
              Загрузить
            </Button>
          </CardFooter>
        </div>
        <AlertDialog open={alert} onOpenChange={setAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Введите ссылку на резюме</AlertDialogTitle>
              <AlertDialogDescription>
                <Input
                  name="url"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel disabled={urlPending}>
                Отмена
              </AlertDialogCancel>
              <Button onClick={async () => parseHh()} disabled={urlPending}>
                {urlPending ? "Загрузка" : "Продолжить"}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  );
}
