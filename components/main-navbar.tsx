import { ModeToggle } from "@/components/mode-toggle-button";
import { UserButton } from "@clerk/nextjs";
import { MainMobileSidebar } from "@/components/main-mobile-sidebar";
import Link from "next/link";

export const MainNavbar = () => {
  return (
    <nav className="w-full h-auto px-4 py-3 flex items-center justify-between bg-slate-200 dark:bg-slate-900">
      <h1 className="hidden lg:block">
        <Link href="/">Main Page</Link>
      </h1>
      <div className="block lg:hidden">
        <MainMobileSidebar />
      </div>
      <div className="flex items-center justify-center gap-x-2">
        <ModeToggle />
        <UserButton />
      </div>
    </nav>
  );
};
