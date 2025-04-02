import { create } from "zustand";

const videoIdStore = create((set) => ({
  videoId: "",
  setVideoId: (id) => set({ videoId: id }), // result 상태를 업데이트하는 함수
}));

export default videoIdStore;
