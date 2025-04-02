const Footer = () => {
  return (
    <footer className="bg-white text-grey-500 pt-10 ">
      <div className="sm:max-w-[1300px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* 로고 및 설명 */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-2 pb-2">SubExtract</h2>
          <p className="text-sm text-gray-700">
            자막 추출 서비스 | 유튜브 영상의 새로운 경험을 제공합니다.
          </p>
        </div>

      
    
      </div>
    </footer>
  );
};

export default Footer;
