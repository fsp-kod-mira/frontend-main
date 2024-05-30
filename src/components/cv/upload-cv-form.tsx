"use client";

import { UploadCVDto } from "@/lib/dto/upload-cv.dto";
import uploadCvForm from "@/lib/forms/upload-cv.form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useToast } from "../ui/use-toast";
import { Input } from "../ui/input";

export default function UploadCVForm() {
  const form = useForm<z.infer<typeof uploadCvForm>>({
    resolver: zodResolver(uploadCvForm),
    defaultValues: {
      file: null,
    },
  });
  const { toast } = useToast();

  const handleSubmit: SubmitHandler<UploadCVDto> = async (data) => {
    toast({
      title: "OK",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Input id="picture" type="file" {...field} />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
