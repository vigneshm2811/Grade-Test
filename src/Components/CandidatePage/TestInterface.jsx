import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CachedIcon from "@mui/icons-material/Cached";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useDispatch } from "react-redux";
import { addToResult } from "../../Features/Result/ResultSlice";
import { currentQuestions } from "../../Features/CurrentQuestions/QuestionSlice";
import { useNavigate } from "react-router-dom";
import firebaseApp from "../../Firebase/Firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const TestInterface = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [unansweredCount, setUnansweredCount] = useState(0);
  const [markedForReview, setMarkedForReview] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const firestore = getFirestore(firebaseApp);
      const questionsCollection = collection(firestore, "VerbalQuestions");
      const questionsSnapshot = await getDocs(questionsCollection);
      const questionsData = questionsSnapshot.docs.map((doc) => doc.data());
      setQuestions(questionsData);
      setSelectedOptions(Array(questionsData.length).fill(-1));
      setUnansweredCount(questionsData.length);
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

  const handleMarkForReview = (questionIndex) => {
    const updatedMarkedForReview = [...markedForReview];
    updatedMarkedForReview[questionIndex] = !markedForReview[questionIndex];
    setMarkedForReview(updatedMarkedForReview);
  };

  const handleSubmit = () => {
    const questionResults = questions.map((data, i) => {
      const selectedOptionIndex = selectedOptions[i];
      const selectedOption = data.options[selectedOptionIndex];
      const isCorrect = selectedOption === data.answer;
      const score = isCorrect ? data.points : 0;

      return {
        id: data.id,
        selectedAnswer: selectedOption,
        isCorrect: isCorrect,
        score: score,
        attempted: selectedOption ? true : false,
        unAttempted: selectedOption ? false : true,
      };
    });

    dispatch(addToResult(questionResults));
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
              <div className="flex items-center flex-wrap justify-center gap-5 py-3">
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
    </>
  );
};

export default TestInterface;
