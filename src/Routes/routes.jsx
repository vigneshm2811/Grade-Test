import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing BrowserRouter, Route, and Routes for routing
import Layout from "../Layout.jsx"; // Importing Layout component for general layout
import LoginPage from "../pages/LoginPage/LoginPage.jsx"; // Importing LoginPage component
import LayoutRecruiterPage from "../pages/RecruiterPage/Layouts/Index.jsx"; // Importing LayoutRecruiterPage component for recruiter layout
import HomeTab from "../Components/TabComponents/Home/HomeTab.jsx"; // Importing HomeTab component for recruiter's home tab
import CustomTestTab from "../Components/TabComponents/CustomTestTab.jsx"; // Importing CustomTestTab component for custom tests tab
import LatestAttemptTab from "../Components/TabComponents/LatestAttemptTab.jsx"; // Importing LatestAttemptTab component for latest attempts tab
import CandidateHome from "../Components/CandidatePageTabs/CandidateHome.jsx"; // Importing CandidateHome component for candidate's home tab
import TestInterface from "../Components/CandidatePageTabs/TestInterface.jsx"; // Importing TestInterface component for candidate's test interface
import ResultInterface from "../Components/CandidatePageTabs/ResultInterface.jsx"; // Importing ResultInterface component for candidate's result interface
import CandidatePageLayout from "../pages/CandidatePageLayout/CandidatePageLayout.jsx"; // Importing CandidatePageLayout component for candidate layout
import NotFound from "../pages/NotFound/NotFound.jsx"; // Importing NotFound component for 404 errors

// Defining the AppRouter component with all routes
export const AppRouter = (
  <Router>
    <Routes path="/" element={<Layout />}>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Nested Routes for Recuriter Auth */}
      <Route path="/recruiter" element={<LayoutRecruiterPage />}>
        <Route path="" element={<HomeTab />} />
        <Route path="custom-test" element={<CustomTestTab />} />
        <Route path="attempts" element={<LatestAttemptTab />} />
      </Route>

      {/* Nested Routes for user Auth */}
      <Route path="/user" element={<CandidatePageLayout />}>
        <Route path="" element={<CandidateHome />} />
        <Route path="home" element={<CandidateHome />} />
        <Route path="test" element={<TestInterface />} />
        <Route path="result" element={<ResultInterface />} />
      </Route>
    </Routes>
  </Router>
);
