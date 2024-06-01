import { z } from "zod";
import uploadCVForm from "../forms/upload-cv.form";

export type UploadCVDto = z.infer<typeof uploadCVForm>;
