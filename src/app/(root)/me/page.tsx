import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function MePage() {
  return (
    <Card className="px-10">
      <CardHeader className="items-center gap-4">
        <Image
          className="rounded-full"
          src="/images/user-placeholder-square.png"
          alt="me"
          width="128"
          height="128"
        />
        <CardTitle>StarPanda</CardTitle>
        <CardDescription>Рекрутер</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Button asChild>
          <Link href="/signout">Выход</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
