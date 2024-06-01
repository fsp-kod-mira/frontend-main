"use client";

import { Roles } from "@/lib/role";
import { usePathname } from "next/navigation";
import NavigationMenu, { NavigationLink } from "./navigation-menu";

type LinksProps = {
  className?: string;
  role: Roles;
  column?: boolean;
};

export default function Links(props: LinksProps) {
  const pathname = usePathname();

  const roleLinks: Record<Roles, NavigationLink[]> = {
    recruiter: [
      {
        link: {
          href: "/view-cv/all",
        },
        menu: {
          active: pathname == "/view-cv/all",
        },
        title: "Кандидаты",
      },
    ],
    hiring_manager: [
      {
        link: {
          href: "/view-cv/all",
        },
        menu: {
          active: pathname == "/view-cv/all",
        },
        title: "Кандидаты",
      },
      {
        link: {
          href: "/view-criteria",
        },
        menu: {
          active: pathname == "/view-criteria",
        },
        title: "Вакансии",
      },
    ],
    resource_manager: [
      {
        link: {
          href: "/view-cv/all",
        },
        menu: {
          active: pathname == "/view-cv/all",
        },
        title: "Кандидаты",
      },
      {
        link: {
          href: "/view-criteria",
        },
        menu: {
          active: pathname == "/view-criteria",
        },
        title: "Вакансии",
      },
    ],

    loading: [],
    unknown: [],
  };

  const links = roleLinks[props.role];
  return (
    <NavigationMenu
      className={props.className}
      links={links}
      column={props.column}
    />
  );
}
