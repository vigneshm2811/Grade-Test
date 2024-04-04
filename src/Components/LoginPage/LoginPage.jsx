import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import GoogleIcon from "../../assets/Logo/GoogleLogo.svg";
import LinkedInIcon from "../../assets/Logo/LinkedinLogo.png";
import MainLogo from "../../assets/GradeTestLogo.png";
import axios from "axios";
import { LoginFormData } from "../../helper/mainData";
import { LoginSocialGoogle } from "reactjs-social-login";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex ">
      <div className="bg-black w-1/2 flex justify-center items-center">
        <img src={MainLogo} alt="logo" />
      </div>

      <div className=" bg-gray-100 w-1/2 flex flex-col justify-center items-center">
        <div className="w-1/2 max-h-80 min-h-60 shadow-lg flex flex-col items-center justify-center bg-white  py-7 px-12">
          <h1 className="text-center text-3xl font-bold">Hello!</h1>

          <div className="w-11/12">
            <LoginSocialGoogle
              client_id="111056746863-3e2quek4ae0m277pc59lbh8ui0rsd0ak.apps.googleusercontent.com"
              access_type="offline"
              onResolve={({ provider, data }) => {
                console.log(provider, data);
                const isAuthSuccessful = true;
                if (isAuthSuccessful) {
                  navigate("/recruiter");
                }
              }}
              onReject={(err) => {
                console.log(err);
              }}>
              <Link>
                <button className="border-[1px] border-slate-200 w-full  my-3 p-2 flex justify-center gap-3 items-center">
                  <img src={GoogleIcon} alt="" className="w-8  h-8" />
                  Sign In with Google
                </button>
              </Link>
            </LoginSocialGoogle>
            <Link to>
              <button className="border-[1px] border-slate-200 w-full  my-3 p-2 flex justify-center gap-3 items-center">
                <img src={LinkedInIcon} alt="" className="w-8  h-8" />
                Sign In with LinkedIn
              </button>
            </Link>
          </div>

          <div className="mt-5">
            <p className="text-center text-sm">
              By Signing In, you are agreeing to our{" "}
              <a className="text-purple-800 cursor-pointer">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a className="text-purple-800 cursor-pointer">Privacy Policy</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
