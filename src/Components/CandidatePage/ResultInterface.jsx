import React, { useEffect, useState } from "react";
import { verbalQuestionsData, ResultDataCards } from "../../helper/mainData";

const ResultInterface = () => {
  return (
    <div>
      <div className="md:px-24 px-8  py-10 ">
        <div className="flex  justify-center relative">
          <div className="lg:w-[60%] w-full">
            <h3 className="font-semibold">English Test</h3>
            <div className="flex justify-between my-6 ">
              {ResultDataCards?.map((e) => {
                return (
                  <div
                    className="border-[1px] shadow flex flex-wrap flex-col items-center justify-center w-[23%] px-3 py-3"
                    key={e?.id}>
                    <div className="flex flex-col justify-center items-center">
                      {e?.icon}
                      <p className="text-sm py-2">{e?.label}</p>
                    </div>

                    <h1>6</h1>
                  </div>
                );
              })}
            </div>

            {verbalQuestionsData.map((data, i) => {
              return (
                <div
                  className="rounded-md shadow-md px-7 py-3 border-[1px] mb-5"
                  key={data?.id}>
                  <div className="questionNumber flex justify-between">
                    <p>Question {i + 1}</p>
                    <div className="flex gap-4  items-center">
                      <p className="status text-red-400 text-sm">
                        Not Attempted
                      </p>
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
                          <input
                            type="radio"
                            className={`${
                              i === 2
                                ? "checked:bg-green-400 checked:hover:bg-green-400 "
                                : "checked:bg-red-400 checked:hover:bg-red-400"
                            } bg-gray-100 border-gray-300 `}
                            checked={i === 3 ? true : false}
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
  );
};

export default ResultInterface;
