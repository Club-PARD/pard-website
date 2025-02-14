import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import InquiryPage from "./pages/InquiryPage";
import ProjectPage from "./pages/ProjectPage";
import RecruitingPage from "./pages/RecruitingPage";
import ScrollToTop from "./components/ScrollToTop";
import ErrorPage from "./pages/ErrorPage";
import ReactGA from "react-ga";
import TagManager from "react-gtm-module";
import React, { useEffect } from "react";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import NewsPage from "./pages/NewsPage";
import TestPage from "./components/Web/Web-HomePage/HomeTest";

function App() {
  const tagManagerArgs = {
    gtmId: "GTM-MW5N2QW",
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  const gaTrackingId = "G-CYK8WPXW3S"; // 환경 변수에 저장된 추적ID 가져오기
  ReactGA.initialize(gaTrackingId, { debug: true }); // react-ga 초기화 및 debug 사용
  ReactGA.pageview(window.location.pathname); // 추적하려는 page 설정

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Inquiry" element={<InquiryPage />} />
        <Route path="/Recruiting" element={<RecruitingPage />} />
        <Route path="/Project" element={<ProjectPage />} />
        <Route path="/Project/:projectId" element={<ProjectDetailPage />} />
        <Route path="/pard-website" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
