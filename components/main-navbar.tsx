import { ModeToggle } from "@/components/mode-toggle-button";
import { UserButton } from "@clerk/nextjs";
import { MainMobileSidebar } from "@/components/main-mobile-sidebar";

export const MainNavbar = () => {
  return (
    <nav className="w-full h-auto px-4 py-3 flex items-center justify-between bg-slate-200 dark:bg-slate-900">
      <div className="hidden lg:block">Main Page</div>
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
