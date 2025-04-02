// youtubeInfoStore.jsx
import { create } from "zustand";

const useYoutubeInfoStore = create((set) => ({
  publishedAt: null,
  title: null,
  channelTitle: null,
  duration: null,
  viewCount: null,
  likeCount: null,
  commentCount: null,
  setYoutubeInfo: (data) =>
    set({
      publishedAt: data.publishedAt,
      title: data.title,
      channelTitle: data.channelTitle,
      duration: data.duration,
      viewCount: data.viewCount,
      likeCount: data.likeCount,
      commentCount: data.commentCount,
    }),
}));

export default useYoutubeInfoStore;
