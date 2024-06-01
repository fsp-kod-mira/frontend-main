import { Roles } from "@/lib/role";

export type User = {
  email: string;
  lastName: string;
  firstName: string;
  middleName: string;
  role: Roles;
};
