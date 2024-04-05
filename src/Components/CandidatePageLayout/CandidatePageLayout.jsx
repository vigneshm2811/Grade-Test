import React from "react";
import { Outlet } from "react-router-dom";
import TestNavBar from "../TestNavBar/TestNavBar";

const CandidatePageLayout = () => {
  return (
    <>
      <TestNavBar />
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default CandidatePageLayout;
