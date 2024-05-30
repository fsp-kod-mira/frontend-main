import { z } from "zod";

export default z.object({
  name: z.string(),
  description: z.string().optional(),
  age: z.object({
    min: z.coerce.number().optional(),
    max: z.coerce.number().optional(),
  }),
  cities: z.array(z.coerce.number()),
  education: z.array(z.coerce.number()),
  timetable: z.array(z.coerce.number()),
  experience: z.array(z.coerce.number()),
  stack: z.array(z.coerce.number()),
});
