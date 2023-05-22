import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import AboutPage from './pages/AboutPage';
 import HomePage from './pages/HomePage';
 import InquiryPage from './pages/InquiryPage';
 import ProjectPage from './pages/ProjectPage';
 import RecruitingPage from './pages/RecruitingPage';
 import ScrollToTop from './components/ScrollToTop';
import ErrorPage from './pages/ErrorPage';

 function App() {
     return <Router>
         <ScrollToTop/>
         <Routes>
             <Route path="/" element={<HomePage />} />
             <Route path="/About" element={<AboutPage />} />
             <Route path="/Inquiry" element={<InquiryPage />} />
             <Route path="/Recruting" element={<RecruitingPage />} />
             <Route path='/Project' element={<ProjectPage />} />
             <Route path='/pard-website' element={<HomePage />} />
             <Route path="*" element={<ErrorPage/>} />
         </Routes>
     </Router>;
};

export default App;
