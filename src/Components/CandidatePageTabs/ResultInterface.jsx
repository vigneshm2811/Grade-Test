import React, { useEffect, useState } from "react";
import { ResultDataCards } from "../../helper/mainData";
import { useSelector } from "react-redux";
import firebaseApp, { auth, firestore } from "../../Firebase/Firebase";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { Helmet } from "react-helmet";

const ResultInterface = () => {
  const [resultData, setResultData] = useState([]);
  const [QuestionsData, setQuestionsData] = useState([]);
  const userId = auth.currentUser?.uid;

  const questionType = useSelector((state) => state.selectQuestionType);

  useEffect(() => {
    getUserData(userId);
    getQuestionData(userId);
  }, [userId]);

  useEffect(() => {
    uploadResults();
  }, [resultData]);

  // get user data and upload the result of user to firebase db
  const getUserData = async (userId) => {
    try {
      if (userId === auth.currentUser?.uid) {
        const firestore = getFirestore(firebaseApp);
        const usersCollection = collection(firestore, "users");
        const usersSnapshot = await getDocs(usersCollection);
        const userData = usersSnapshot.docs.map((doc) => doc.data());
        console.log("userDataF", userData[0]);
        const data = userData[0];
        const parsedData = Object.keys(data).map((key) => data[key]);
        console.log("userDataParsed", parsedData);
        setResultData(parsedData?.filter((data) => data.id));
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      console.error("Error getting user data:", error);
      return null;
    }
  };

  const getQuestionData = async (userId) => {
    const savedState = sessionStorage.getItem("testState");
    if (savedState) {
      const data = JSON.parse(savedState);
      console.log("current questions", data);
      setQuestionsData(data);
    }
    return null;
  };
  console.log(QuestionsData, "upadteddd");

  const overAllTotal = QuestionsData?.reduce(
    (total, result) => total + result?.points,
    0
  );
  const score = resultData?.reduce((total, result) => total + result?.score, 0);

  const attemptedQuestions = resultData?.reduce((count, e) => {
    return e?.attempted ? count + 1 : count;
  }, 0);

  const correctAnswer = resultData?.reduce((count, e) => {
    return e?.isCorrect ? count + 1 : count;
  }, 0);

  const uploadResults = async () => {
    const dateOfSubmit = new Date();
    const userResultData = [];
    const resultData = {
      userId: auth.currentUser?.uid,
      userImage: auth.currentUser?.photoURL,
      userName: auth.currentUser?.displayName,
      userEmail: auth.currentUser?.email,
      scoreObtained: score,
      TotalScore: overAllTotal,
      totalQuestions: QuestionsData?.length,
      attemptedQuestions: attemptedQuestions,
      correctAnswer: correctAnswer,
      dateOfSubmit: dateOfSubmit,
    };
    userResultData.push(resultData);

    const db = getFirestore(firebaseApp);

    const userId = auth?.currentUser?.uid;
    try {
      const userRef = doc(firestore, "userResults", userId);

      await setDoc(userRef, { userId, ...resultData });
      // console.log("Data uploaded successfully!");
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Result</title>
      </Helmet>
      <div className="md:px-24 px-8  py-10 ">
        <div className="flex  justify-center relative">
          <div className="lg:w-[60%] w-full">
            <h3 className="font-semibold text-xl">{questionType}</h3>
            <div className="flex md:justify-between justify-center gap-2 md:gap-0 flex-wrap my-6 ">
              {ResultDataCards?.map((e) => {
                let value = "";
                switch (e.type) {
                  case "noOfQuestion":
                    value = QuestionsData?.length;
                    break;
                  case "questionsAttempt":
                    value = resultData?.reduce((count, e) => {
                      return e?.attempted ? count + 1 : count;
                    }, 0);

                    break;
                  case "correctlyAnswered":
                    value = resultData?.reduce((count, e) => {
                      return e?.isCorrect ? count + 1 : count;
                    }, 0);
                    break;
                  case "pointsScored":
                    score
                      ? (value = `${score}/${overAllTotal}`)
                      : (value = `0/${overAllTotal ? overAllTotal : 0}`);
                    break;
                  default:
                    value = "N/A";
                }
                return (
                  <div
                    className="border-[1px] shadow flex  flex-col items-center justify-center w-3/4  md:w-[24%] px-3 py-3"
                    key={e?.id}>
                    <div className="flex flex-col justify-center items-center">
                      {e?.icon}
                      <p className="text-sm py-2">{e?.label}</p>
                    </div>

                    <h1 className="font-medium text-2xl">
                      {value ? value : 0}
                    </h1>
                  </div>
                );
              })}
            </div>

            <div>
              {QuestionsData?.map((data, index) => {
                const matchData = resultData?.find((e) => e.id === data.id);

                return (
                  <div
                    className="rounded-md shadow-md px-7 py-3 border-[1px] mb-5"
                    key={data?.id}>
                    <div className="questionNumber flex justify-between">
                      <p>Question {index + 1}</p>
                      <div className="flex gap-4  items-center">
                        {matchData?.unAttempted && (
                          <p className="status text-red-400 text-sm ">
                            Not Attempted
                          </p>
                        )}

                        <span className="text-sm rounded-xl border-[1px] py-1 px-2">
                          {data?.points} Points
                        </span>
                      </div>
                    </div>
                    <div className="question py-2">
                      <p>{data?.question}</p>
                    </div>
                    <div className="options">
                      {data?.options?.map((options, i) => {
                        return (
                          <div key={options} className="my-1">
                            {/* {matchData?.isCorrect && <div>h</div>} */}
                            <input
                              type="radio"
                              className={`${
                                matchData?.isCorrect
                                  ? "checked:bg-green-400 checked:hover:bg-green-400 "
                                  : "checked:bg-red-400 checked:hover:bg-red-400"
                              } bg-gray-100 border-gray-300 `}
                              checked={
                                options === matchData?.selectedAnswer
                                  ? true
                                  : false
                              }
                            />
                            <label className="ml-3">{options}</label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultInterface;
