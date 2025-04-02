import { create } from "zustand";

const loadingStore = create((set) => ({
  lodings: false,
  settingLoading: (newLoading) => set({ lodings: newLoading }), // ✅ 객체 직접 반환
}));

export default loadingStore;
