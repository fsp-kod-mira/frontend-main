import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/view-cv/all");
  return <></>;
}
