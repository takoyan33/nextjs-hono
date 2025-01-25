import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { MainSidebar } from "./main-sidebar";
import { Menu } from "lucide-react";

export const MainMobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] dark:bg-slate-800">
        <SheetHeader className="sr-only">
          <SheetTitle>Sidebar</SheetTitle>
        </SheetHeader>
        <MainSidebar />
      </SheetContent>
    </Sheet>
  );
};
