"use client";

import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

export const InvitationButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-full">
          <Plus className="w-4 h-4" />
          <DialogTitle className="hidden md:block ml-2">Invite member</DialogTitle>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};
