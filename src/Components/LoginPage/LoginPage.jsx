import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLogo from "../../assets/GradeTestLogo.png";
import { signInWithPopup } from "firebase/auth";
import userIcon from "../../assets/icons/user.png"
import Recruiter from "../../assets/icons/office-worker.png"
import "./LoginPageStyles.scss";

import { auth, googleProvider } from "../../Firebase/Firebase"; // Ensure correct import
// import { signInWithEmailAndPassword } from "firebase/auth"; // Import signInWithEmailAndPassword

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("user");

  // Function to handle radio button change
  const handleOptionToggle = (option) => {
    setSelectedOption(option);
  };


  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      navigate("/user/home");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        navigate("/user/home");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="w-full h-screen  md:flex bg-black py-10 md:p-0 ">
      <div className=" md:w-1/2 w-full md:flex justify-center items-center">
        <img src={MainLogo} alt="logo" className="mx-auto w-3/4 md:w-auto" />
      </div>

      <div className=" md:bg-gray-100 w-full  md:w-1/2 flex flex-col justify-center items-center">
        <div className="py-10">
          <div class="radio-inputs">
            <label>
              <input class="radio-input" type="radio" name="engine" 
               checked={selectedOption === "user"}
               onChange={() => handleOptionToggle("user")}
               autoComplete="off"
              />
              <span class="radio-tile">
                <img src={userIcon} alt="user" className="w-8 h-8"/>
                <span class="radio-label">User Login</span>
              </span>
            </label>
            <label>
              <input
        
                class="radio-input"
                type="radio"
                name="engine"
                checked={selectedOption === "recruiter"}
                onChange={() => handleOptionToggle("recruiter")}
                autoComplete="off"
              />
              <span class="radio-tile">
             <img src={Recruiter} alt="" className="w-10 h-10"/>
                <span class="radio-label">Recruiter</span>
              </span>
            </label>
          </div>
        </div>

        <div className="lg:w-1/2 w-4/5  min-h-60 shadow-lg flex flex-col items-center justify-center bg-white  py-7 px-7 lg:px-12">
          <h1 className="text-center text-3xl font-bold">Hello!</h1>

          <div className="w-full flex-1 mt-8">
            <div className="flex flex-col items-center">
              <button
                onClick={handleGoogleSignIn}
                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                <div className="bg-white p-2 rounded-full">
                  <svg className="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span className="ml-4">Sign In with Google</span>
              </button>
            </div>

            <div className="my-5 border-b text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Or sign in with e-mail
              </div>
            </div>

            <div className="mx-auto max-w-xs">
              <form>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  autoComplete="username"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />

                <button
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={handleSignIn}>
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign in</span>
                </button>
              </form>
            </div>
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
