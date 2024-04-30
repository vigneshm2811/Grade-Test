import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter and Route
import HomePage from "./Components/HomePage/HomePage.jsx";
import Layout from "./Layout.jsx";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import LayoutRecruiterPage from "./Components/RecruiterPage/Layouts/Index.jsx";
import HomeTab from "./Components/RecruiterPage/TabComponents/Home/HomeTab.jsx";
import CustomTestTab from "./Components/RecruiterPage/TabComponents/CustomTestTab.jsx";
import ProfileTab from "./Components/RecruiterPage/TabComponents/ProfileTab.jsx";
import LatestAttemptTab from "./Components/RecruiterPage/TabComponents/LatestAttemptTab.jsx";
import CandidateHome from "./Components/CandidatePage/CandidateHome.jsx";
import TestInterface from "./Components/CandidatePage/TestInterface.jsx";
import ResultInterface from "./Components/CandidatePage/ResultInterface.jsx";
import CandidatePageLayout from "./Components/CandidatePageLayout/CandidatePageLayout.jsx";
import store from "./app/store";

const AppRouter = (
  <Router>
    <Routes path="/" element={<Layout />}>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/recruiter" element={<LayoutRecruiterPage />}>
        <Route path="" element={<HomeTab />} />
        <Route path="custom-test" element={<CustomTestTab />} />
        <Route path="profile" element={<ProfileTab />} />
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
