import { api } from "@/lib/axios";
import CVModule from "@/repository/modules/cv";
import UsersModule from "@/repository/modules/users";

export type Repository = {
  users: UsersModule;
  cv: CVModule;
};

export default function useRepository() {
  const modules: Repository = {
    users: new UsersModule(api),
    cv: new CVModule(),
  };
  return { api: modules };
}
