import React from "react";
import "./NotFoundStyles.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="page_404 flex flex-col justify-center h-screen">
        <div className="">
          <div className="">
            <div className="text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="text-3xl font-semibold">
                  Look like you're lost
                </h3>

                <p>the page you are looking for not available!</p>
                <button
                  onClick={() => navigate("/")}
                  className="link_404 bg-[#39ac31] text-white px-5 py-3 my-5">
                  Go to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
