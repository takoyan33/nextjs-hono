"use client";
import { useUser } from "@clerk/nextjs";
import { UserProfileModal } from "@/components/modals/user-profile-modal";
import React, { useEffect, useState } from "react";

export const ModalsProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <UserProfileModal email={user?.emailAddresses?.[0].emailAddress || ""} />
    </div>
  );
};
