import React from "react";
import { useNavigate } from "react-router-dom";
const SubtractHeader = () => {
  const navigate = useNavigate(); // React Router의 useNavigate 훅 사용
  return (
    <header className="bg-white shadow-md p-4 w-full">
      <div className="max-w-screen mx-auto flex justify-between items-center px-4">
        <h1
          className="text-xl font-bold  cursor-pointer hover:text-blue-500 transition"
          onClick={() => navigate("/")} // 클릭 시 '/' 경로로 이동
        >
          SubExtract
        </h1>

        {/* 공유하기 버튼 */}
        <button className="relative group text-gray-700 font-medium py-2">
          {/* 공유하기 */}
          {/* 호버 시 아래 검정색 라인 */}
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </button>
      </div>
    </header>
  );
};

export default SubtractHeader;
