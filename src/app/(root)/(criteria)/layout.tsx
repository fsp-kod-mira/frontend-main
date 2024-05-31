import userStorageService from "@/services/user-storage.service";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await userStorageService.get();
  if (user?.role == "recruiter") {
    redirect("/");
  }

  return children;
}
