import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GithubAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "firebase/auth";
import "./LoginPageStyles.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "firebase/auth";
import { CircularProgress } from "@mui/material";
import { auth, googleProvider } from "../../Firebase/Firebase";
import { Helmet } from "react-helmet";
const LoginForm = ({ selectedOption }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isPending, setIsPending] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const provider = new GithubAuthProvider();

  const handleGitHubLogin = async () => {
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error("Could not complete sign up");
      }

      const user = res.user;

      navigate("/recruiter");

      setIsPending(false);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      navigate("/user/home");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/user/home");
        // console.log(user);
      })
      .catch((error) => {
        toast.error("Invalid credential");
      });
    setEmail("");
    setPassword("");
  };

  const handelSignUp = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        setSignUp(false);
      })
      .catch((error) => {
        setUsername("");
        setError(error.message);
      });
  };

  const loaderActive = () => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
    }, 500);
  };
  return (
    <>
      <Helmet>
        <title>GradeTest-Login</title>
      </Helmet>
      <div className="lg:w-1/2 w-4/5  md:min-h-[517px] shadow-lg flex flex-col items-center justify-center bg-white p-4  md:py-7 md:px-7 lg:px-12">
        {isPending ? (
          <CircularProgress />
        ) : (
          <div>
            <h1 className="text-center text-xl md:text-3xl font-bold">
              {" "}
              {selectedOption === "user" ? "Hello!" : "Recruiter's Login"}
            </h1>

            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                {selectedOption === "user" ? (
                  <button
                    onClick={handleGoogleSignIn}
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div className="bg-white md:p-2 rounded-full">
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
                    <span className="ml-4 text-sm md:text-md">
                      Sign In with Google
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={handleGitHubLogin}
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-200 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div className="bg-white md:p-2 rounded-full ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="w-4"
                        viewBox="0 0 1792 1792">
                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                      </svg>
                    </div>
                    <span className="ml-4 text-sm md:text-md">
                      Sign In with Github
                    </span>
                  </button>
                )}
              </div>

              <div className="md:my-5 my-2 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  {selectedOption === "user"
                    ? "Or sign in with e-mail"
                    : "Login with Company Email"}
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <form>
                  {signUp && (
                    <input
                      className="w-full px-8 md:py-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      autoComplete="username"
                      placeholder="Name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  )}
                  <input
                    className="w-full md:mt-5 mt-1 px-8 md:py-4 py-3  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    autoComplete="username"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full px-8 md:py-4 py-3  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white md:mt-5 mt-4"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />

                  {signUp ? (
                    <button
                      className="md:mt-5 mt-3 tracking-wide font-semibold bg-indigo-800 text-gray-100 w-full md:py-4 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      onClick={handelSignUp}>
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
                      <span className="ml-3">Sign Up</span>
                    </button>
                  ) : (
                    <button
                      className="md:mt-5 mt-3 tracking-wide font-semibold bg-indigo-800 text-gray-100 w-full md:py-4 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
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
                      <span className="ml-3">Log in</span>
                    </button>
                  )}
                </form>
              </div>
            </div>

            <div className="mt-5">
              {signUp ? (
                <p className="text-center ">
                  If you're a old user,{" "}
                  <span
                    className="text-purple-800 cursor-pointer"
                    onClick={() => {
                      loaderActive();
                      setSignUp(false);
                    }}>
                    Log in
                  </span>{" "}
                  here
                </p>
              ) : (
                <p className="text-center ">
                  If you're a new user,{" "}
                  <span
                    className="text-purple-800 cursor-pointer"
                    onClick={() => {
                      loaderActive();
                      setSignUp(true);
                    }}>
                    Sign up
                  </span>{" "}
                  here
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <ToastContainer theme="dark" autoClose={3000} />
    </>
  );
};

export default LoginForm;
