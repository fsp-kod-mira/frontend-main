import { z } from "zod";

export default z
  .object({
    lastName: z.string(),
    firstName: z.string(),
    middleName: z.string(),

    email: z.string().email(),
    password: z.string().min(6),
    confirm: z.string().min(6),

    role: z.enum(["recruiter", "hiring_manager", "resource_manager"]),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Пароли не совпадают!",
    path: ["confirm"],
  });
