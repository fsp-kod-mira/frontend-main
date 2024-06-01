import { z } from "zod";
import cvForm from "../forms/cv.form";

export type CVDto = z.infer<typeof cvForm>;
