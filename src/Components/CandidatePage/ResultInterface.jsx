import React, { useEffect, useState } from "react";
import { verbalQuestionsData, ResultDataCards } from "../../helper/mainData";
import { useSelector } from "react-redux";

const ResultInterface = () => {
  const QuestionsData = useSelector((state) => state.currentQuestion);
  const resultData = useSelector((state) => state.addToResult);

  // console.log(
  //   "total",
  //   QuestionsData[0].reduce((total, result) => total + result.points, 0)
  // );
  // console.log("totals", QuestionsData[0]);

  // console.log("QuestionsData", QuestionsData);

  const overAllTotal = QuestionsData[0]?.reduce(
    (total, result) => total + result?.points,
    0
  );
  const score = resultData[0]?.reduce(
    (total, result) => total + result?.score,
    0
  );


  return (
    <>
      <div className="md:px-24 px-8  py-10 ">
        <div className="flex  justify-center relative">
          <div className="lg:w-[60%] w-full">
            <h3 className="font-semibold">English Test</h3>
            <div className="flex md:justify-between justify-center gap-2 md:gap-0 flex-wrap my-6 ">
              {ResultDataCards?.map((e) => {
                let value = "";
                switch (e.type) {
                  case "noOfQuestion":
                    value = QuestionsData[0]?.length;
                    break;
                  case "questionsAttempt":
                    value = resultData[0]?.reduce((count, e) => {
                      return e.attempted ? count + 1 : count;
                    }, 0);
                    break;
                  case "correctlyAnswered":
                    value = resultData[0]?.reduce((count, e) => {
                      return e.isCorrect ? count + 1 : count;
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
              {QuestionsData[0]?.map((data, index) => {
                const matchData = resultData[0].find((e) => e.id === data.id);
                console.log("match data", matchData);
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
                            {matchData?.isCorrect && <div>h</div>}
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
