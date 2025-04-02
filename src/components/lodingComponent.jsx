import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-white pt-20">
      {/* 로딩 스피너 */}
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      {/* 텍스트 */}
      <p className="mt-4 text-lg font-semibold text-gray-700">
        자막을 추출하고 있습니다.
      </p>
    </div>
  );
};

export default LoadingPage;
