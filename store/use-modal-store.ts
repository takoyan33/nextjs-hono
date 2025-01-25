import { create } from "zustand";

type UseModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useModal = create<UseModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
