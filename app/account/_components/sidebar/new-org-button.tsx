"use client";

import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const NewOrgButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <DialogTitle></DialogTitle>
          <button
            type="button"
            className="mt-6 flex h-full w-full items-center justify-center rounded-md bg-slate-600 opacity-60 transition hover:opacity-100"
          >
            <Plus className="text-white" />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[480px] border-none bg-transparent p-0">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};
