"use client";

import { Separator } from "@/components/ui/separator";
import { Database, Home, Image, User, ShieldCheck, Copy } from "lucide-react";
import { MainSidebarItem } from "@/components/main-sidebar-item";
import { Button } from "@/components/ui/button";
import { useModal } from "@/store/use-modal-store";
import { useEventListener } from "usehooks-ts";
import { OwnTooltipWrapper } from "@/components/own-tooltip-wrapper";

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
    icon: <Home className="h-5 w-5 mr-3 group-hover:text-white" />,
  },
  {
    id: "1",
    href: "/account",
    pathname: "/account",
    label: "Account",
    icon: <User className="h-5 w-5 mr-3 group-hover:text-white" />,
  },
  {
    id: "2",
    href: "/images",
    pathname: "/images",
    label: "Images",
    icon: <Image className="h-5 w-5 mr-3 group-hover:text-white" />,
  },
  {
    id: "3",
    href: "/posts",
    pathname: "/posts",
    label: "Data",
    icon: <Database className="h-5 w-5 mr-3 group-hover:text-white" />,
  },
  {
    id: "4",
    href: "/protected",
    pathname: "/protected",
    label: "Protected",
    icon: <ShieldCheck className="h-5 w-5 mr-3 group-hover:text-white" />,
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
    <nav className="w-full flex py-4 px-4 flex-col items-center">
      <div className="w-full">
        <h3>Menu</h3>
        <Separator className="bg-slate-400 mt-2" />
        <div className="w-full py-4">
          <ul>
            {menuItems.map((item) => (
              <MainSidebarItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <Separator className="bg-slate-400 mt-2" />
        <div className="w-full py-4">
          <OwnTooltipWrapper label="ShortCutKey Ctrl + C">
            <Button
              onClick={onOpen}
              className="w-full flex items-center gap-x-2"
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
