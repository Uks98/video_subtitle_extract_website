import "./App.css";
import PartTimePage from "./page/chat";
import SubtitleExtractor from "./page/youtube_page";
import SubtractHeader from "./components/header.jsx";
import SubtractGuideComponent from "./components/subtract_guide.jsx";
import BaseSubtitleComponent from "./components/subtitle_base_component.jsx";
import SubIntroPage from "./page/sub_intropage.jsx"
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* 항상 표시되는 컴포넌트 */}
      <SubtractHeader />
      <SubtractGuideComponent />
      
      {/* 조건에 따라 바뀌는 컴포넌트 */}
      <Routes>
        <Route path="/" element={<SubIntroPage />} />
        <Route path="/subtitle" element={<BaseSubtitleComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
