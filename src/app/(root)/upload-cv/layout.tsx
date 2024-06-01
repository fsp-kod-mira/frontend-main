import userStorageService from "@/services/user-storage.service";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await userStorageService.get();
  if (user?.role == "resource_manager") {
    redirect("/");
  }

  return (
    <section className="mt-10 grow flex flex-col justify-center items-center">
      {children}
    </section>
  );
}
