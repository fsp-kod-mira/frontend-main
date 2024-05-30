import { z } from "zod";
import editCriteriaForm from "../forms/edit-criteria.form";

export type EditCriteriaDto = z.infer<typeof editCriteriaForm>;
