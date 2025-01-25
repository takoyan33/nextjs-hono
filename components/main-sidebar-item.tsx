"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuItem } from "./main-sidebar";
import { cn } from "@/lib/utils";

interface MainSidebarItemProps {
  item: MenuItem;
}

export const MainSidebarItem = ({ item }: MainSidebarItemProps) => {
  const pathname = usePathname();

  return (
    <li
      className={cn(
        "group rounded-sm p-2 transition",
        item.pathname === pathname
          ? "bg-slate-700 text-white"
          : "text-neutral-600 dark:text-neutral-400 hover:bg-slate-700"
      )}
    >
      <Link href={item.href} className="flex items-center">
        {item.icon}
        <span className="group-hover:text-white">{item.label}</span>
      </Link>
    </li>
  );
};
