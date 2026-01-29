"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { MenuItem } from "./main-sidebar";

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
          : "text-neutral-600 hover:bg-slate-700 dark:text-neutral-400",
      )}
    >
      <Link href={item.href} className="flex items-center">
        {item.icon}
        <span className="group-hover:text-white">{item.label}</span>
      </Link>
    </li>
  );
};
