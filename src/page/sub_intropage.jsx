import loadingStore from "../store/loading_store.jsx"; // zustand store에서 가져오기
import LoadingPage from "../components/lodingComponent.jsx"; // 로딩 페이지 컴포넌트 가져오기
import Footer from "../components/footer_components.jsx";
import Image1 from "../asset/images/intro1.png";
import Image2 from "../asset/images/intro2.png";
import Image3 from "../asset/images/intro3.png";
import Image4 from "../asset/images/intro4.png";
const SubIntroPage = () => {
  const { lodings } = loadingStore(); // zustand store에서 로딩 상태 가져오기

  return (
    <div className="sm:max-w-[1300px] mx-auto px-2 sm:px-4 py-16 sm:pt-[10px] pt-[0px]">
      {/* ✅ 로딩 상태일 때 로딩 컴포넌트 표시 */}
      {lodings && <LoadingPage />}
      {/* ✅ 로딩 아닐 때만 콘텐츠 표시 */}
      {!lodings && (
        <>
          {/* 상단 섹션 */}
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:pb-30 pt-[70px] sm:pt-[80px]">
            {/* 텍스트 섹션 */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="sm:text-4xl text-2xl font-bold leading-snug mb-4">
                자막 추출, 유튜브 영상의
                <br />
                새로운 경험
              </h2>
              <p className="sm:text-lg text-base text-gray-600">
                유튜브 링크를 입력하면 자동으로 자막을 추출해 드립니다.
                <br />
                간편한 사용법으로 누구나 쉽게 자막을 생성할 수 있습니다.
              </p>
            </div>

            {/* 이미지 섹션 */}
            <div className="flex-1 w-full sm:w-[500px] h-[300px] sm:h-[700px] rounded-xl overflow-hidden shadow-lg space-y-3">
              <div className="flex-col space-y-3">
              <img
                src={Image1} // 이미지 URL을 넣으세요
                alt="자막 생성1"
                className="w-full h-full object-fill"
              />
               <img
                src={Image4} // 이미지 URL을 넣으세요
                alt="자막 생성12"
                className="w-full h-full object-fill"
              />
              </div>
             
            </div>
          </div>

          {/* 하단 섹션 */}
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:pb-50 pb-20 sm:pt-20">
            {/* 텍스트 섹션 */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="sm:text-4xl text-2xl  font-bold leading-snug mb-4  pt-[80px]">
                영상 링크를 입력하고 자막을 <br />
                쉽게 생성하세요!
              </h3>
              <p className="sm:text-lg text-base text-gray-600">
                간편한 링크 입력만으로 자막을 생성하고 <br />
                유튜브 영상의 자막을 자동으로 활용하세요. <br />
                생성된 자막은 편리한 텍스트 형식으로 쉽게 복사할 수 있습니다.
              </p>
            </div>

            {/* 이미지 섹션 */}
            <div className="flex-1 w-full sm:w-[800px] h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg">
              <img
                src={Image2} // 이미지 URL을 넣으세요
                alt="자막 생성2"
                className="w-full h-full object-contail"
              />
            </div>
          </div>

          {/* 하단 섹션 */}
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:pb-30 pb-20">
            {/* 텍스트 섹션 */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="sm:text-4xl text-2xl font-bold leading-snug mb-4">
                생성된 자막을 다운 받아 보세요!
              </h3>
              <p className="sm:text-lg text-base text-gray-600">
                생성된 자막은 pdf와 txt파일 두가지 형태로 다운 받을 수 있습니다.
                <br />
              </p>
            </div>

            {/* 이미지 섹션 */}
            <div className="flex-1 w-full sm:w-[500px] h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg ">
              <img
                src={Image3} // 이미지 URL을 넣으세요
                alt="자막 생성"
                className="w-full h-full object-contain "
              />
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default SubIntroPage;
