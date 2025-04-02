import useYoutubeInfoStore from "../store/youtube_info_store";

const fetchYoutubeVideoInfo = async (videoId, apiKey) => {
  const { setYoutubeInfo } = useYoutubeInfoStore.getState(); // 스토어 상태 업데이트 함수 가져오기
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,contentDetails,statistics`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const video = data.items[0];
      const snippet = video.snippet;
      const contentDetails = video.contentDetails;
      const statistics = video.statistics;

      const youtubeInfo = {
        publishedAt: snippet.publishedAt,
        title: snippet.title,
        channelTitle: snippet.channelTitle,
        duration: contentDetails.duration,
        viewCount: statistics.viewCount,
        likeCount: statistics.likeCount,
        commentCount: statistics.commentCount,
      };
      setYoutubeInfo(youtubeInfo); // Zustand 스토어 업데이트
    } else {
      console.error("No video found with this ID.");
    }
  } catch (error) {
    console.error("Error fetching YouTube video info:", error);
  }
};

export default fetchYoutubeVideoInfo;
