import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CachedIcon from "@mui/icons-material/Cached";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useDispatch, useSelector } from "react-redux";
import { currentQuestions } from "../../reduxSlice/CurrentQuestions/QuestionSlice";
import { useNavigate } from "react-router-dom";
import firebaseApp, { auth, firestore } from "../../Firebase/Firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { Helmet } from "react-helmet";

const TestInterface = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const timeSec = 300;
  const questionType = useSelector((state) => state.selectQuestionType);

  const [questions, setQuestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [questionsType, setQuestionsType] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [unansweredCount, setUnansweredCount] = useState(0);
  const [markedForReview, setMarkedForReview] = useState([]);
  const [title, setTitle] = useState("Test");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    setQuestionsType(questionType);
  }, [questionType]);

  useEffect(() => {
    fetchData();
  }, [questionsType]);

  useEffect(() => {
    setUnansweredCount(questions.length);
  }, [questions]);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, timeSec * 1000);
  }, []);

  const handleClose = () => setOpen(false);

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
          setTitle("Numeric Test");
          break;
        case "English Skills":
          setQuestions(
            questionsData.filter((question) => question.type === "verbal")
          );
          setTitle("Verbal Test");
          break;
        case "Programming":
          setQuestions(
            questionsData.filter((question) => question.type === "computer")
          );
          setTitle("Programming Test");
          break;
        case "Custom Test":
          setQuestions(
            questionsData.filter((question) => question.type === "computer")
          );
          setTitle("Custom Test");
          break;
        default:
          setQuestions(
            questionsData.filter((question) => question.type === questionsType)
          );
      }

      setSelectedOptions(Array(questionsData.length).fill(-1));
      setMarkedForReview(Array(questionsData.length).fill(false));
    } catch (error) {
      console.log(error);
    }
  };
  const saveCurrentQuestionData = (questions) => {
    sessionStorage.setItem("testState", JSON.stringify(questions));
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
        // console.log("userDataF", userData);
        return userData;
      } else {
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
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

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

    const questionResultsWithTime = questionResults.map((result) => ({
      ...result,
      timeTaken: 300, // Add time taken to each question result
    }));
    // console.log(questionResultsWithTime,"questionResultsWithTime1")
    // console.log(questionResults,"questionResultsWithTime2")
    handleClose();
    uploadUserDataArray(questionResults);

    saveCurrentQuestionData(questions);
    const userId = auth.currentUser?.uid;
    getUserData(userId);
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
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <p className="text-center "> Are you want to submit</p>

          <div className="flex justify-center gap-5 mt-4">
            <button
              onClick={handleSubmit}
              className="bg-blue-900 text-white w-14 py-1 rounded-md">
              Yes
            </button>
            <button
              onClick={() => handleClose()}
              className="bg-gray-500 text-white w-14 py-1 h-9  rounded-md">
              No
            </button>
          </div>
        </Box>
      </Modal>
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
                onClick={() => {
                  setOpen(true);
                }}>
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
                  duration={timeSec}
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
