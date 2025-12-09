"use client";

import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const InvitationButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-full">
          <Plus className="h-4 w-4" />
          <DialogTitle className="ml-2 hidden md:block">
            Invite member
          </DialogTitle>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[880px] border-none bg-transparent p-0">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};
