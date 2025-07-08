import { create } from "zustand";

interface NavbarState {
  collapsed: boolean;
  toggle: () => void;
  setCollapsed: (collapsed: boolean) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  collapsed: false,
  toggle: () => set((state) => ({ collapsed: !state.collapsed })),
  setCollapsed: (collapsed) => set({ collapsed }),
}));

interface NavbarOpenState {
  opened: boolean;
  toggle: () => void;
  setOpened: (opened: boolean) => void;
}

export const useNavbarOpenStore = create<NavbarOpenState>((set) => ({
  opened: false,
  toggle: () => set((state) => ({ opened: !state.opened })),
  setOpened: (opened) => set({ opened }),
}));