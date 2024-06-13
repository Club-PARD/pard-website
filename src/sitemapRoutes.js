import React from "react";
import { Route } from "react-router";

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
    <Route>
      <Route path="/" />
      <Route path="/About" />
      <Route path="/Inquiry" />
      <Route path="/Recruiting" />
      <Route path="/Project" />
      <Route path="/Project/:projectId" />
      <Route path="/pard-website" />
      <Route path="/news" />
      <Route path="*" />
    </Route>
  );
}

export default App;
