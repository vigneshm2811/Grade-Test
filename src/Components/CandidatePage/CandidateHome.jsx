import React, { useState, useEffect } from "react";
import { TestTypeData } from "../../helper/mainData";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectQuestionType } from "../../Features/TestType/TestTypeSlice";
import Loader from "../Loader/Loader";
import { toast, ToastContainer } from "react-toastify";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebaseApp from "../../Firebase/Firebase";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
const CandidateHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [testId, setTestId] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const notify = () => {
    toast("Default Notification !");
  };

  const handelSelect = (type) => {
    if (type === "Custom Test") {
      toggleModal();
    } else {
      navigate("/user/test");
      dispatch(selectQuestionType(type));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  });
  const fetchCustomTest = async (testId) => {
    try {
      const db = getFirestore(firebaseApp);
      const activeTestsCollection = collection(db, "ActiveTests");
      const querySnapshot = await getDocs(activeTestsCollection);
      const activeTestsData = querySnapshot.docs.map((doc) => ({
        uniqueId: doc.id,
        ...doc.data(),
      }));
      const customType = activeTestsData.find(
        (data) => data.uniqueId === testId
      );
      dispatch(selectQuestionType(customType.type));
      navigate("/user/test");
    } catch (error) {
      console.error("Error fetching active tests:", error);
      toast.error("In Valid Test ID");
    }
  };
  const handelStartTest = () => {
    if (testId === "") {
      toast.error("Enter Your test ID");
    } else {
      fetchCustomTest(testId);
    }
  };

  return (
    <>
      <Helmet>
        <title>Test Type</title>
      </Helmet>
      {open ? (
        <Loader />
      ) : (
        <div className="lg:px-60 px-10  md:px-20 py-8">
          <div className="flex flex-col justify-center items-center">
            <div>
              <h1 className="font-semibold text-3xl">Different Test Types</h1>
              <p className="py-1 text-light text-gray-500">
                Combine these tests into a single assessment based on the role.
                Then, share the assessment with your candidates.
              </p>
            </div>

            <div className="test-type grid md:grid-cols-2 gap-10">
              {TestTypeData.map((e) => {
                return (
                  <div
                    className="group p-4 cursor-pointer bg-gray-100 rounded  grid md:grid-cols-6 items-center gap-4 border-2 border-transparent hover:border-gray-200 "
                    key={e.id}
                    onClick={() => handelSelect(e.type)}>
                    <div className="col-span-3  ">
                      <img
                        src={e.image}
                        alt=""
                        className="rounded w-full h-full lg:w-10/12  object-left-top object-cover mx-auto"
                      />
                    </div>
                    <div className="col-span-3">
                      <h1 className="text-lg font-semibold leading-6 text-gray-900">
                        {e.type}
                      </h1>
                      <p className="text-gray-500 py-2">{e.description}</p>

                      <p className="text-green-600 cursor-pointer">
                        Try Now <KeyboardArrowRightIcon />{" "}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="p-4 md:p-5 text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Please check your Email
              </h3>

              <input
                className="w-full my-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                autoComplete="test"
                placeholder="Enter Your Test ID"
                value={testId}
                onChange={(e) => setTestId(e.target.value)}
              />

              <button
                onClick={handelStartTest}
                type="button"
                className=" bg-indigo-800 hover:bg-indigo-700 text-gray-100 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                Start Test
              </button>
              <button
                onClick={toggleModal}
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                cancel
              </button>
            </div>
          </div>
          <ToastContainer position="top-right" autoClose={5000} theme="dark" />
        </div>
      )}
    </>
  );
};

export default CandidateHome;
