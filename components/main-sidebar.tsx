"use client";

import { Copy, Database, Home, Image, ShieldCheck, User } from "lucide-react";
import { useEventListener } from "usehooks-ts";
import { MainSidebarItem } from "@/components/main-sidebar-item";
import { OwnTooltipWrapper } from "@/components/own-tooltip-wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useModal } from "@/store/use-modal-store";

export type MenuItem = {
  id: string;
  href: string;
  pathname: string;
  label: string;
  icon: React.ReactNode;
};

const menuItems = [
  {
    id: "0",
    href: "/",
    pathname: "/",
    label: "Home",
    icon: <Home className="mr-3 h-5 w-5 group-hover:text-white" />,
  },
  {
    id: "1",
    href: "/account",
    pathname: "/account",
    label: "Account",
    icon: <User className="mr-3 h-5 w-5 group-hover:text-white" />,
  },
  {
    id: "2",
    href: "/images",
    pathname: "/images",
    label: "Images",
    icon: <Image className="mr-3 h-5 w-5 group-hover:text-white" />,
  },
  {
    id: "3",
    href: "/posts",
    pathname: "/posts",
    label: "Data",
    icon: <Database className="mr-3 h-5 w-5 group-hover:text-white" />,
  },
  {
    id: "4",
    href: "/protected",
    pathname: "/protected",
    label: "Protected",
    icon: <ShieldCheck className="mr-3 h-5 w-5 group-hover:text-white" />,
  },
];

export const MainSidebar = () => {
  const { onOpen } = useModal();

  const modalOpen = (e: KeyboardEvent) => {
    // ctrl + cを押した場合modal open
    if (e.key === "c" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      onOpen();
    }
  };

  useEventListener("keydown", modalOpen);

  return (
    <nav className="flex w-full flex-col items-center px-4 py-4">
      <div className="w-full">
        <h3>Menu</h3>
        <Separator className="mt-2 bg-slate-400" />
        <div className="w-full py-4">
          <ul>
            {menuItems.map((item) => (
              <MainSidebarItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <Separator className="mt-2 bg-slate-400" />
        <div className="w-full py-4">
          <OwnTooltipWrapper label="ShortCutKey Ctrl + C">
            <Button
              onClick={onOpen}
              className="flex w-full items-center gap-x-2"
              variant="primary"
            >
              <Copy className="h-4 w-4" />
              Copy Email
            </Button>
          </OwnTooltipWrapper>
        </div>
      </div>
    </nav>
  );
};
