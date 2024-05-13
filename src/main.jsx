import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter and Route
import HomePage from "./pages/HomePage/HomePage.jsx";
import Layout from "./Layout.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import LayoutRecruiterPage from "./pages/RecruiterPage/Layouts/Index.jsx";
import HomeTab from "./Components/TabComponents/Home/HomeTab.jsx";
import CustomTestTab from "./Components/TabComponents/CustomTestTab.jsx";

import LatestAttemptTab from "./Components/TabComponents/LatestAttemptTab.jsx";
import CandidateHome from "./Components/CandidatePageTabs/CandidateHome.jsx";
import TestInterface from "./Components/CandidatePageTabs/TestInterface.jsx";
import ResultInterface from "./Components/CandidatePageTabs/ResultInterface.jsx";
import CandidatePageLayout from "./pages/CandidatePageLayout/CandidatePageLayout.jsx";
import store from "./app/store";
import NotFound from "./pages/NotFound/NotFound.jsx";

const AppRouter = (
  <Router>
    <Routes path="/" element={<Layout />}>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<LoginPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/recruiter" element={<LayoutRecruiterPage />}>
        <Route path="" element={<HomeTab />} />
        <Route path="custom-test" element={<CustomTestTab />} />
        <Route path="attempts" element={<LatestAttemptTab />} />
      </Route>
      <Route path="/user" element={<CandidatePageLayout />}>
        <Route path="" element={<CandidateHome />} />
        <Route path="home" element={<CandidateHome />} />
        <Route path="test" element={<TestInterface />} />
        <Route path="result" element={<ResultInterface />} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>{AppRouter}</Provider>
  </React.StrictMode>
);
