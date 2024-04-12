import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLogo from "../../assets/GradeTestLogo.png";
import GoogleIcon from "../../assets/Logo/GoogleLogo.svg";
import LinkedInIcon from "../../assets/Logo/LinkedinLogo.png";

import { auth, googleProvider } from "../../Firebase/Firebase";
import { signInWithPopup } from "firebase/auth";
const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      navigate("/user/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-screen  md:flex bg-black py-10 md:p-0 ">
      <div className=" md:w-1/2 w-full md:flex justify-center items-center">
        <img src={MainLogo} alt="logo" className="mx-auto w-3/4 md:w-auto" />
      </div>

      <div className=" md:bg-gray-100 w-full  md:w-1/2 flex flex-col justify-center items-center">
        <div className="lg:w-1/2 w-4/5 max-h-80 min-h-60 shadow-lg flex flex-col items-center justify-center bg-white  py-7 px-7 lg:px-12">
          <h1 className="text-center text-3xl font-bold">Hello!</h1>

          <div className="md:w-11/12 w-full">
            <button
              onClick={handleGoogleSignIn}
              className="border-[1px] border-slate-200 w-full  my-3 p-2 flex justify-center gap-3 items-center">
              <img src={GoogleIcon} alt="" className="w-8  h-8" />
              Sign In with Google
            </button>

            {/* LinkedIn Sign In Button */}
            <Link to="/user/home">
              <button className="border-[1px] border-slate-200 w-full  my-3 p-2 flex justify-center gap-3 items-center">
                <img src={LinkedInIcon} alt="" className="w-8  h-8" />
                Sign In with LinkedIn
              </button>
            </Link>
          </div>

          {error && <p className="text-red-500">{error}</p>}

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
