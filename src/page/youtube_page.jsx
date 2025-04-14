import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import resultStore from "../store/store.jsx"; // zustand store 가져오기
import loadingStore from "../store/loading_store.jsx"; // zustand store 가져오기
import videoIdStore from "../store/video_id_store.jsx";
import fetchYoutubeVideoInfo from "../components/get_youtube_components.jsx";

import { useNavigate } from "react-router-dom"; // 추가: react-router-dom에서

const SubtitleExtractor = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  // zustand store에서 result와 setResult 가져오기
  const { setResult } = resultStore(); // setResult만 가져와서 업데이트
  const { setVideoId } = videoIdStore();
  const { settingLoading } = loadingStore();
  const navigate = useNavigate();

  //url id 추출
  const getVideoId = (url) => {
    // 개선된 정규식 (모든 유튜브 URL 형식 처리)
    const regex =
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|live\/|user\/\S+\/))([^#&?]{11})/i;
    const match = url.match(regex);

    if (match && match[1]) {
      const extractedId = match[1];
      setVideoId(extractedId); // 비디오 ID 저장
      console.log("Extracted ID:", extractedId);
      return extractedId;
    }
    console.error("Invalid YouTube URL");
    setResult({
      error: "유효하지 않은 YouTube URL입니다. 유튜브 주소를 확인해주세요.",
    });
  };

  const fetchSubtitles = async () => {
    if (!youtubeUrl) {
      alert("링크를 입력하세요.");
      return;
    }
    settingLoading(true);
    try {
      //"http://13.125.221.17:3000/extract-subtitles"
      const response = await fetch("http://localhost:3000/extract-subtitles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: youtubeUrl }),
      });
      getVideoId(youtubeUrl);
      const data = await response.json();
      setResult(data); // zustand store의 result 상태 업데이트
      console.log(data + "데이터 넘어옴");
      await fetchYoutubeVideoInfo(
        getVideoId(youtubeUrl),
        process.env.REACT_APP_YOUTUBE_KEY
      );
      navigate("/subtitle");
      setYoutubeUrl("");
    } catch (error) {
      console.error("에러 발생:", error);
      setResult({ error: "서버와 연결할 수 없습니다." });
    } finally {
      settingLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-[700px]  max-w-full px-4 sm:px-0">
        <input
          type="text"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          placeholder="링크를 입력하세요"
          className="w-full p-3 pl-5 pr-16 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
        />
        <button
          onClick={fetchSubtitles}
          className="absolute right-5 sm:right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center dark:bg-[#42454a] text-white rounded-full hover:bg-blue-600 transition"
        >
          <FaDownload size={20} />
        </button>
      </div>
    </div>
  );
};

export default SubtitleExtractor;
