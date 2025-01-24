import { ModeToggle } from "@/components/mode-toggle-button";
import { UserButton } from "@clerk/nextjs";

export const MainNavbar = () => {
  return (
    <nav className="w-full h-auto px-4 py-3 flex items-center justify-between bg-slate-200 dark:bg-slate-900">
      <div>main Page</div>
      <div className="flex items-center justify-center gap-x-2">
        <ModeToggle />
        <UserButton />
      </div>
    </nav>
  );
};
