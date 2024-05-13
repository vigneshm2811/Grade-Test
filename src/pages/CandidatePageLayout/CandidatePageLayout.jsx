import React from "react";
import { Outlet } from "react-router-dom";
import TestNavBar from "../../Components/TestNavBar/TestNavBar";

const CandidatePageLayout = () => {
  return (
    <>
      <div className="h-screen overflow-y-scroll relative ">
        <TestNavBar />
      
        <Outlet />
      </div>
    </>
  );
};

export default CandidatePageLayout;
