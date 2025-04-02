// BaseSubtitleComponent.js
import React from "react";
import { useState } from "react";
import videoIdStore from "../store/video_id_store.jsx";
import useYoutubeInfoStore from "../store/youtube_info_store.jsx";
import resultStore from "../store/store.jsx"; // zustand store 가져오기
import LoadingPage from "../components/lodingComponent.jsx";
import loadingStore from "../store/loading_store.jsx";
import DownloadButton from "./download_button.jsx";
import SubIntroPage from "../page/sub_intropage.jsx";
import Footer from "../components/footer_components.jsx";

const BaseSubtitleComponent = () => {
  const { videoId } = videoIdStore();
  // zustand store에서 result 가져오기
  const { result } = resultStore();
  const [toast, setToast] = useState(false);
  const { lodings } = loadingStore();
  const {
    publishedAt,
    title,
    channelTitle,
    duration,
    viewCount,
    likeCount,
    commentCount,
  } = useYoutubeInfoStore();
  function getCopied() {
    if (result?.content) {
      const textToCopy = result.content.map((item) => item.text).join("\n");
      navigator.clipboard.writeText(textToCopy).then(() => {
        setToast(true);
        setTimeout(() => setToast(false), 1000); // 2초 후 메시지 숨김
      });
    }
  }
  function formatDate(isoDate) {
    if (!isoDate) return "날짜 정보 없음"; // null 또는 undefined 처리
    console.log(result);
    return isoDate.split("T")[0] ?? ""; // "2025-03-02T04:00:34Z" → "2025-03-02"
  }

  function formatDuration(duration) {
    if (!duration) return "영상 길이 정보 없음"; // null 또는 undefined 처리
    return (
      duration
        .replace("H", "시간 ")
        .replace("PT", "")
        .replace("M", "분 ")
        .replace("S", "초") ?? ""
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      {/* ✅ 로딩 상태일 때 로딩 컴포넌트 표시 */}
      {lodings && (
        <div className="absolute sm:top-[600px] top-[600px] left-0 right-0 flex justify-center">
          <LoadingPage />
        </div>
      )}
      {title == null && (
        <div className="sm:pt-[800px] pt-[400px]">
          <SubIntroPage />
        </div>
      )}
      {/* ✅ 로딩 아닐 때만 콘텐츠 표시 */}
      {!lodings && title != null && (
        <div className="flex flex-col w-[1300px] h-full pt-20 bg-white pl-[330px] sm:pl-0 ">
          <div className="w-full flex flex-col sm:flex-row justify-between">
            <div className="flex flex-col pr-[350px] pl-[20px]">
              <p className="text-start font-bold text-xl pb-5">
                {title} 자막을 추출했습니다.
              </p>
              <div className="w-[380px] h-[230px] rounded-xl overflow-hidden shadow-lg flex object-cover">
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3 text-lg pt-10 sm:pb-10 pb-5">
                <p>영상 길이: {formatDuration(duration)}</p>
                <p>채널 정보: {channelTitle}</p>
                <p>조회수: {viewCount}회</p>
                <p>좋아요: {likeCount}개</p>
                <p>댓글 수: {commentCount}개</p>
                <p>게시 일: {formatDate(publishedAt)}</p>
                <div className="pt-5 space-y-3">
                  <DownloadButton
                    size="medium"
                    theme="pdf"
                    text={"PDF 다운로드"}
                    subtitles={result?.content}
                    fileName={title}
                  />
                  <DownloadButton
                    size="medium"
                    theme="txt"
                    text={"TXT 다운로드"}
                    subtitles={result?.content}
                    fileName={title}
                  />
                </div>
              </div>
            </div>
            <div className="relative sm:w-[600px] sm:h-f w-[380px] max-w-lg pb-10">
              {result?.error ? (
                <p className="text-red-500">{result.error}</p>
              ) : (
                <div className="h-[500px] sm:h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-dark-[#42454a] pl-5 pt-5">
                  <button
                    onClick={getCopied}
                    className="absolute top-2 right-7 mt-3 p-2 bg-gray-100 rounded-full shadow hover:bg-gray-50"
                  >
                    📋
                  </button>
                  {toast && (
                    <p className="absolute top-12 right-5 pt-1 text-blue-800 font-bold text-sm">
                      Copied!
                    </p>
                  )}
                  {result ? (
                    result.content.map((item, index) => (
                      <span
                        key={index}
                        className="block text-black w-[500px] h-10 font-gmarketMedium"
                      >
                        {item.text}
                      </span>
                    ))
                  ) : (
                    <p className="text-black">자막이 없습니다.</p>
                  )}
                </div>
              )}
              {/* <div className="pb-10">
            <Footer />
          </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BaseSubtitleComponent;
