import SubtitleExtractor from "../page/youtube_page.jsx";
import BaseSubtitleComponent from "../components/subtitle_base_component.jsx";
const SubtractGuideComponent = () => {
  return (
    <div className="max-w-full bg-white dark:bg-[#31363F] flex flex-col justify-start pb-20 pl-2 pr-2 ">
      <p className="text-white sm:text-4xl text-3xl text-center pt-[100px] sm:pb-[75px] pb-[35px] font-gmarketBold pl-5 pr-5">
        내가 원하는 동영상의 자막을 무료로 다운받아보세요!
      </p>
      <SubtitleExtractor />
      <p className="text-white text-lg pt-10 text-center font-gmarketLignt pl-2 pr-2">
        시간을 절약하세요. <br></br>복잡한 과정 없이 동영상의 자막을 얻을
        수 있습니다.
      </p>
    </div>
  );
};

export default SubtractGuideComponent;
