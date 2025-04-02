import { create } from "zustand";

const useChatStore = create((set) => ({
  isChatVisible: false,
  showChat: () => set({ isChatVisible: true }),
}));

export default useChatStore;
