// store.js
import {create} from "zustand";

const resultStore = create((set) => ({
  result: null,
  setResult: (data) => set({ result: data }), // result 상태를 업데이트하는 함수
}));
export default resultStore;