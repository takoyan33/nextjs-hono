import { OrganizationSwitcher } from "@clerk/nextjs";

export const OrgNavbar = () => {
  return (
    <div className="w-full flex items-center justify-between gap-x-2">
      <OrganizationSwitcher />
    </div>
  );
};
