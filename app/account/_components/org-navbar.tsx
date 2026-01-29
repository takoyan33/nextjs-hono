import { OrganizationSwitcher } from "@clerk/nextjs";
import { InvitationButton } from "@/app/account/_components/invitaion-button";

export const OrgNavbar = () => {
  return (
    <div className="flex w-full items-center justify-between gap-x-2">
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: "380px",
            },
            organizationSwitcherTrigger: {
              backgroundColor: "white",
              padding: "6px",
              width: "100%",
              justifyContent: "space-between",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "white",
              },
            },
          },
        }}
      />
      <InvitationButton />
    </div>
  );
};
