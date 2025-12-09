"use client";
import { useUser } from "@clerk/nextjs";
import { useIsClient } from "usehooks-ts";
import { UserProfileModal } from "@/components/modals/user-profile-modal";

export const ModalsProvider = () => {
  const isClient = useIsClient();
  const { user } = useUser();

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <UserProfileModal email={user?.emailAddresses?.[0].emailAddress || ""} />
    </div>
  );
};
