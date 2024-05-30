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

export default function UploadCVPage() {
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
            <Button variant="outline">Отмена</Button>
            <Button>Загрузить</Button>
          </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
}
