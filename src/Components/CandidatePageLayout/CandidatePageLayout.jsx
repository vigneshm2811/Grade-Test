import React from "react";
import { Outlet } from "react-router-dom";
import TestNavBar from "../TestNavBar/TestNavBar";

const CandidatePageLayout = () => {
  return (
    <>
      <TestNavBar />
      <Outlet />
    </>
  );
};

export default CandidatePageLayout;
