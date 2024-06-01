"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { initials } from "@/lib/utils";
import userStorageService from "@/services/user-storage.service";
import { Button } from "@/components/ui/button";
import * as Dropdown from "@/components/ui/dropdown-menu";
import * as AlertDialog from "@/components/ui/alert-dialog";
import Icon from "@mdi/react";
import { mdiAccount, mdiLogout } from "@mdi/js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "@/types/user.type";

export default function UserProfile() {
  const [dialogOpened, setDialogOpened] = useState<boolean>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    userStorageService.get().then((data) => setUser(data!));
  }, [setUser]);
  if (!user) return <div className="h-10 w-10"></div>;

  return (
    <>
      <Dropdown.DropdownMenu>
        <Dropdown.DropdownMenuTrigger>
          <Avatar>
            <AvatarFallback>
              {user.lastName[0]}
              {user.firstName[0]}
            </AvatarFallback>
          </Avatar>
        </Dropdown.DropdownMenuTrigger>
        <Dropdown.DropdownMenuContent>
          <Dropdown.DropdownMenuLabel>
            {user.firstName}
          </Dropdown.DropdownMenuLabel>
          <Dropdown.DropdownMenuItem asChild>
            <Link href="/me">
              <Icon path={mdiAccount} size={0.7} />
              Профиль
            </Link>
          </Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuSeparator />
          <Dropdown.DropdownMenuItem onClick={() => setDialogOpened(true)}>
            <Icon path={mdiLogout} size={0.7} />
            <span className="ml-1">Выход</span>
          </Dropdown.DropdownMenuItem>
        </Dropdown.DropdownMenuContent>
      </Dropdown.DropdownMenu>

      <AlertDialog.AlertDialog
        open={dialogOpened}
        onOpenChange={setDialogOpened}
      >
        <AlertDialog.AlertDialogContent>
          <AlertDialog.AlertDialogHeader>
            <AlertDialog.AlertDialogTitle>
              Вы уверены?
            </AlertDialog.AlertDialogTitle>
            <AlertDialog.AlertDialogDescription>
              Вы действительно хотите выйти?
            </AlertDialog.AlertDialogDescription>
          </AlertDialog.AlertDialogHeader>
          <AlertDialog.AlertDialogFooter>
            <AlertDialog.AlertDialogCancel>Нет</AlertDialog.AlertDialogCancel>
            <AlertDialog.AlertDialogAction asChild>
              <Button asChild>
                <Link href="/signout">Да</Link>
              </Button>
            </AlertDialog.AlertDialogAction>
          </AlertDialog.AlertDialogFooter>
        </AlertDialog.AlertDialogContent>
      </AlertDialog.AlertDialog>
    </>
  );
}
