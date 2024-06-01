"use client";

import { UploadCVDto } from "@/lib/dto/upload-cv.dto";
import uploadCvForm from "@/lib/forms/upload-cv.form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useToast } from "../ui/use-toast";
import { Input } from "../ui/input";
import useRepository from "@/hooks/repository";

export default function UploadCVForm() {
  const form = useForm<z.infer<typeof uploadCvForm>>({
    resolver: zodResolver(uploadCvForm),
    defaultValues: {
      file: "",
    },
  });
  const { toast } = useToast();
  const { api } = useRepository();

  const handleSubmit: SubmitHandler<UploadCVDto> = async (data) => {
    const formData = new FormData();
    formData.append("cv", data.file[0]);

    await api.cv.upload(formData);
    await toast({
      title: "OK",
    });
  };

  return (
    <Form {...form}>
      <form id="form" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="file"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Input
                  id="picture"
                  type="file"
                  {...fieldProps}
                  onChange={(event) => onChange(event.target.files)}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
