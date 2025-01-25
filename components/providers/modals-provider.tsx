"use client";
import { useUser } from "@clerk/nextjs";
import { UserProfileModal } from "@/components/modals/user-profile-modal";
import React from "react";
import { useIsClient } from "usehooks-ts";

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
