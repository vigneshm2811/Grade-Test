import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CachedIcon from "@mui/icons-material/Cached";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { verbalQuestionsData } from "../../helper/mainData";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const TestInterface = () => {
  return (
    <>
      <div className="px-24 py-10 ">
        <div className="flex justify-between relative">
          <div className="w-[60%]">
            {verbalQuestionsData.map((data, i) => {
              return (
                <div
                  className="rounded-md shadow-md px-7 py-4 border-[1px] mb-5"
                  key={data?.id}>
                  <div className="questionNumber flex justify-between">
                    <p>Question {i + 1}</p>
                    <div className="flex gap-2 items-center">
                      <span className="text-sm rounded-xl border-[1px] py-1 px-3">
                        2 Points{" "}
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
                      name="radio-buttons-group">
                      {data?.options?.map((options) => {
                        return (
                          <FormControlLabel
                            value={options}
                            control={<Radio size="small" />}
                            label={options}
                          />
                        );
                      })}
                    </RadioGroup>{" "}
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" flex flex-col gap-10 fixed right-20 top-[23%]">
            <div className="border-[1px] shadow-sm rounded-xl p-5">
              <p>Time Left</p>
              <div className="flex justify-center">
                <CountdownCircleTimer
                  isPlaying
                  duration={40}
                  colors={["#9582b4", "#A30000"]}
                  colorsTime={[30, 35]}>
                  {({ remainingTime }) => remainingTime}
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
                {verbalQuestionsData.map((e, i) => {
                  return (
                    <div
                      className="rounded-md flex items-center justify-center border-[1px] w-10 h-10 border-blue-600 bg-blue-100 p-3"
                      key={i}>
                      {i + 1}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestInterface;
