import { z } from "zod";

export default z.object({
  id: z.string(),
  uploader_id: z.string(),
  status: z.string(),
  favorite: z.boolean(),

  firstName: z.string().min(2),
  lastName: z.string().min(2),
  middleName: z.string().min(2),

  gender: z.string(),
  birthday: z.string(),

  phone: z.string().min(2),
  email: z.string().min(2),

  country: z.string().min(2),
  city: z.string().min(2),
  transfer: z.boolean(),

  position: z.string().min(2),
  specializations: z.array(z.string()),
  employment: z.array(z.string()),
  schedule: z.array(z.string()),

  skills: z.array(z.string()),

  jobs: z.array(
    z.object({
      company: z.string(),
      position: z.string(),
      description: z.string(),
      start: z.string(),
      end: z.string(),
    })
  ),

  education: z.array(
    z.object({
      years: z.string(),
      name: z.string(),
      description: z.string(),
    })
  ),
});
