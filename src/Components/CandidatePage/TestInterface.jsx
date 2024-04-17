import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CachedIcon from "@mui/icons-material/Cached";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useDispatch, useSelector } from "react-redux";
// import { addToResult } from "../../Features/Result/ResultSlice";
import { currentQuestions } from "../../Features/CurrentQuestions/QuestionSlice";
import { useNavigate } from "react-router-dom";
import firebaseApp, { auth, firestore } from "../../Firebase/Firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import Upload from "../Upload";

const TestInterface = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questionType = useSelector((state) => state.selectQuestionType);
  console.log(questionType, "qType");

  const [questions, setQuestions] = useState([]);
  const [questionsType, setQuestionsType] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [unansweredCount, setUnansweredCount] = useState(0);
  const [markedForReview, setMarkedForReview] = useState([]);

  useEffect(() => {
    setQuestionsType(questionType);
  }, [questionType]);
  console.log(questionsType, "qType after");

  useEffect(() => {
    fetchData();
  }, [questionsType]);

  const fetchData = async () => {
    try {
      const firestore = getFirestore(firebaseApp);
      const questionsCollection = collection(firestore, "Questions");
      const questionsSnapshot = await getDocs(questionsCollection);
      const questionsData = questionsSnapshot.docs.map((doc) => doc.data());

      switch (questionsType) {
        case "Numeric":
          setQuestions(
            questionsData.filter((question) => question.type === "numeric")
          );
          break;
        case "English Skills":
          setQuestions(
            questionsData.filter((question) => question.type === "verbal")
          );
          break;
        case "Programming":
          setQuestions(
            questionsData.filter((question) => question.type === "computer")
          );
          break;
        case "Custom Test":
          setQuestions(
            questionsData.filter((question) => question.type === "computer")
          );
          break;
        default:
          setQuestions(questionsData);
      }

      setSelectedOptions(Array(questionsData.length).fill(-1));
      setUnansweredCount(questions.length);
      setMarkedForReview(Array(questionsData.length).fill(false));
    } catch (error) {
      console.log(error);
    }
  };

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);

    if (selectedOptions[questionIndex] === -1) {
      setAnsweredCount(answeredCount + 1);
      setUnansweredCount(unansweredCount - 1);
    }
  };
  const getUserData = async (userId) => {
    try {
      if (userId === auth.currentUser?.uid) {
        const firestore = getFirestore(firebaseApp);
        const usersCollection = collection(firestore, "users");
        const usersSnapshot = await getDocs(usersCollection);
        const userData = usersSnapshot.docs.map((doc) => doc.data());
        console.log("userDataF", userData);
        return userData;
      }
      else{
        throw new Error("User not found");
      }
    } catch (error) {
      console.error("Error getting user data:", error);
      return null;
    }
  };

  const handleMarkForReview = (questionIndex) => {
    const updatedMarkedForReview = [...markedForReview];
    updatedMarkedForReview[questionIndex] = !markedForReview[questionIndex];
    setMarkedForReview(updatedMarkedForReview);
  };
    const uploadUserDataArray = async (userData) => {
      const userId = auth.currentUser.uid;
      try {
        // Remove fields with undefined values
        const sanitizedUserData = Object.fromEntries(
          Object.entries(userData).filter(([_, value]) => value !== undefined)
        );
        // Get a reference to the user's document in Firestore
        const userRef = doc(firestore, "users", userId);
        // Upload the sanitized data to Firestore, including the user ID
        await setDoc(userRef, { userId, ...sanitizedUserData });
        console.log("Data uploaded successfully!");
      } catch (error) {
        console.error("Error uploading data:", error);
      }
    };



    const uploadUserCurrentQuestions = async (CurrentQuestion) => {
      const userId = auth.currentUser.uid;
      try {
        // Remove fields with undefined values
        const sanitizedUserData = Object.fromEntries(
          Object.entries(CurrentQuestion).filter(([_, value]) => value !== undefined)
        );
        // Get a reference to the user's document in Firestore
        const userRef = doc(firestore, "CurrentQuestions", userId);
        // Upload the sanitized data to Firestore, including the user ID
        await setDoc(userRef, { userId, ...sanitizedUserData });
        console.log("Data uploaded successfully!");
      } catch (error) {
        console.error("Error uploading data:", error);
      }
    };
  
  console.log("user id", auth.currentUser?.uid);

  const handleSubmit = () => {
    const questionResults = questions.map((data, i) => {
      const selectedOptionIndex = selectedOptions[i];
      const selectedOption = data.options[selectedOptionIndex];
      const isCorrect = selectedOption === data.answer;
      const score = isCorrect ? data.points : 0;
      const correctAnswer = data.answer;

      return {
        id: data.id,
        selectedAnswer: selectedOption ? selectedOption : null,
        isCorrect: isCorrect,
        score: score,
        attempted: selectedOption ? true : false,
        unAttempted: selectedOption ? false : true,
        answer: correctAnswer,
      };
    });

    uploadUserDataArray(questionResults);
    uploadUserCurrentQuestions(questions)
    const userId = auth.currentUser?.uid;
    getUserData(userId);
    // dispatch(addToResult(questionResults));
    dispatch(currentQuestions(questions));
    navigate("/user/result");
  };

  const children = ({ remainingTime }) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    return (
      <div className="text-xl">
        {hours}:{minutes}:{seconds}
      </div>
    );
  };

  return (
    <>
      <div className="md:px-24 px-8  py-10 ">
        <div className="flex md:justify-between justify-center relative">
          <div className="md:w-[60%] w-full">
            {questions?.map((data, i) => (
              <div
                className="rounded-md shadow-md px-7 py-4 border-[1px] mb-5"
                key={data?.id}>
                <div className="questionNumber flex justify-between">
                  <p>Question {i + 1}</p>
                  <div className="flex gap-2 items-center">
                    <span className="text-sm rounded-xl border-[1px] py-1 px-3">
                      {data?.points} Points
                    </span>
                    {markedForReview[i] ? (
                      <BookmarkIcon
                        className="cursor-pointer text-orange-500"
                        onClick={() => handleMarkForReview(i)}
                      />
                    ) : (
                      <BookmarkBorderIcon
                        className="cursor-pointer text-gray-500"
                        onClick={() => handleMarkForReview(i)}
                      />
                    )}
                    <CachedIcon
                      className="cursor-pointer text-gray-500"
                      onClick={() => handleOptionSelect(i, null)}
                      style={{
                        display: selectedOptions[i] !== -1 ? "block" : "none",
                      }}
                    />
                  </div>
                </div>
                <div className="question py-2">
                  <p>{data?.question}</p>
                </div>
                <div className="options">
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group">
                    {data?.options?.map((option, index) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio size="small" />}
                        label={option}
                        checked={selectedOptions[i] === index}
                        onChange={() => handleOptionSelect(i, index)}
                      />
                    ))}
                  </RadioGroup>{" "}
                </div>
              </div>
            ))}

            <div className="flex justify-end">
              <button
                className="bg-blue-800 text-white px-4 py-2 rounded-sm "
                onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>

          <div className=" hidden md:flex flex-col gap-10 fixed right-14 top-[23%] w-[35%]">
            <div className="border-[1px] shadow-sm rounded-xl p-5">
              <p>Time Left</p>
              <div className="flex justify-center">
                <CountdownCircleTimer
                  isPlaying
                  duration={300}
                  colors={["#9582b4", "#A30000"]}
                  colorsTime={[30, 35]}>
                  {children}
                </CountdownCircleTimer>
              </div>
            </div>

            <div className="border-[1px] shadow-sm rounded-xl p-5">
              <h3 className="font-semibold">Questions</h3>
              <div className="py-2">
                <p>Answered: {answeredCount}</p>
                <p>Unanswered: {unansweredCount}</p>
                <p>
                  Marked For Review:{" "}
                  {markedForReview.filter((review) => review).length}
                </p>
              </div>
              <div className="flex items-center flex-wrap justify-center gap-5 py-3 overflow-y-scroll max-h-48">
                {questions.map((e, i) => (
                  <div
                    key={i}
                    className={`rounded-md flex items-center justify-center border-[1px] w-10 h-10 p-3 cursor-pointer ${
                      markedForReview[i]
                        ? "bg-orange-100 border-orange-600"
                        : selectedOptions[i] !== -1
                        ? "bg-green-100 border-green-600"
                        : "border-blue-600 bg-blue-100"
                    }`}
                    onClick={() => handleMarkForReview(i)}>
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Upload/> */}
    </>
  );
};

export default TestInterface;
