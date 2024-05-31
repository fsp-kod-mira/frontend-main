"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Roles, getByName } from "@/lib/role";
import userStorageService from "@/services/user-storage.service";
import { User } from "@/types/user.type";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MePage() {
  const [user, setUser] = useState<User>();
  const [role, setRole] = useState<Roles>("unknown");

  useEffect(() => {
    userStorageService.get().then((data) => {
      setUser(data!);
      setRole(data!.role);
    });
  }, [setUser, setRole]);
  if (!user) {
    setUser({
      email: "user@example.com",
      firstName: "",
      middleName: "",
      lastName: "",
      role: "unknown",
    });
  }

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
        <CardTitle>
          {user?.firstName} {user?.middleName} {user?.lastName}
        </CardTitle>
        <CardDescription>{getByName(role)}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Button asChild>
          <Link href="/signout">Выход</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
