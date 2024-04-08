import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CachedIcon from "@mui/icons-material/Cached";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { verbalQuestionsData } from "../../helper/mainData";
import { useScoreContext } from "../../Context/ScoreContextProvider";

const TestInterface = () => {
  const [questionResults, setQuestionResults] = useState([]);

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

  const handleOptionSelect = (selectedOption, questionId) => {
    const existingResultIndex = questionResults.findIndex(
      (result) => result.id === questionId
    );

    const question = verbalQuestionsData.find((item) => item.id === questionId);
    const isCorrect = selectedOption === question.answer;
    const score = isCorrect ? question.points : 0;

    const updatedResults = [...questionResults];

    if (existingResultIndex !== -1) {
      updatedResults[existingResultIndex] = {
        id: questionId,
        selectedAnswer: selectedOption,
        isCorrect: isCorrect,
        score: score,
      };
    } else {
      updatedResults.push({
        id: questionId,
        selectedAnswer: selectedOption,
        isCorrect: isCorrect,
        score: score,
      });
    }

    setQuestionResults(updatedResults);
  };

  const handleSubmit = () => {
    submitResults(questionResults);
    console.log("Submitted results:", questionResults);
  };

  const totalScore = questionResults.reduce(
    (total, result) => total + result.score,
    0
  );

  return (
    <>
      <div className="md:px-24 px-8  py-10 ">
        <div className="flex md:justify-between justify-center relative">
          <div className="md:w-[60%] w-full">
            {verbalQuestionsData.map((data, i) => (
              <div
                className="rounded-md shadow-md px-7 py-4 border-[1px] mb-5"
                key={data?.id}>
                <div className="questionNumber flex justify-between">
                  <p>Question {i + 1}</p>
                  <div className="flex gap-2 items-center">
                    <span className="text-sm rounded-xl border-[1px] py-1 px-3">
                      {data?.points} Points
                    </span>
                    <BookmarkBorderIcon className="cursor-pointer text-gray-500" />
                    <CachedIcon
                      className="cursor-pointer text-gray-500 "
                      sx={{ display: "hidden" }}
                    />
                  </div>
                </div>
                <div className="question py-2">
                  <p>{data?.question}</p>
                </div>
                <div className="options">
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={(e) =>
                      handleOptionSelect(e.target.value, data.id)
                    }>
                    {data?.options?.map((option) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio size="small" />}
                        label={option}
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
              <p>Filter</p>
            </div>

            <div className="border-[1px] shadow-sm rounded-xl p-5">
              <h3 className="font-semibold">Questions</h3>
              <div className="py-2">
                <p>Answered: 0</p>
                <p>Unanswered: 6</p>
                <p>Marked For Review: 0</p>
              </div>
              <div className="flex items-center flex-wrap justify-center gap-5 py-3">
                {verbalQuestionsData.map((e, i) => (
                  <div
                    className="rounded-md flex items-center justify-center border-[1px] w-10 h-10 border-blue-600 bg-blue-100 p-3"
                    key={i}>
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
