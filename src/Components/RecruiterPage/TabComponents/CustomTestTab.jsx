import React, { useState } from "react";
import MoreIcon from "../../../IconsComponents/MoreIcon";
import "./TabsCommonStyles.scss";
import CloudSave from "../../../IconsComponents/CloudSave";
import FolderPlus from "../../../IconsComponents/FolderPlus";

const CustomTestTab = () => {
  const [options, setOptions] = useState([""]);

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <div>
      <div>
        <p>Untitled Quiz</p>
      </div>

      <div className="mt-4 w-full md:w-[70%]">
        <div className="custom-test-card  px-6 py-4 border-[1px] rounded-md border-l-blue-300  border-l-8 min-h-48">
          <div className="flex flex-wrap justify-between">
            <p>Question 1</p>
            <MoreIcon className={"w-6 h-6 cursor-pointer"} />
          </div>

          <div className="flex mt-3 justify-between items-center">
            <div class="input flex flex-col w-[65%]">
              <label
                htmlFor="input"
                class="text-gray-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit">
                Enter the Questions
              </label>
              <input
                id="password"
                type="text"
                placeholder=""
                name="input"
                class="border-gray-200 input px-[10px] py-[11px] text-xs bg-white w-full"
              />
            </div>

            <div className=" flex gap-5">
              <div>
                <div class="input flex flex-col w-fit">
                  <label
                    htmlFor="input"
                    class="text-gray-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit">
                    Points
                  </label>
                  <input
                    id="password"
                    type="number"
                    placeholder=""
                    name="input"
                    class="border-gray-200 input px-[10px] py-[11px] text-xs bg-white w-28"
                  />
                </div>
              </div>
              <div className="">
                <div class="input flex flex-col w-fit">
                  <label
                    htmlFor="input"
                    class="text-gray-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit">
                    Negative Points
                  </label>
                  <input
                    id="password"
                    type="number"
                    placeholder=""
                    name="input"
                    class="border-gray-200 input px-[10px] py-[11px] text-xs bg-white w-28"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Render option inputs */}
          {options.map((option, index) => (
            <div key={index} className="input flex flex-col w-fit mt-3">
              <label
                htmlFor={`option-${index}`}
                className="text-gray-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit">
                {`Option ${index + 1}`}
              </label>
              <input
                id={`option-${index}`}
                type="text"
                placeholder=""
                name={`option-${index}`}
                className="border-gray-200 input px-[10px] py-[11px] text-xs bg-white w-28"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
            </div>
          ))}
          <div className="">
            <button onClick={handleAddOption}>+</button>
          </div>
        </div>

        <div className="Buttons mt-4 flex justify-center gap-4">
          <button className="mt-3 px-10 font-normal border-indigo-900 text-indigo-800  py-2 rounded-md border transition-all duration-300 ease-in-out flex items-center justify-center  focus:shadow-outline focus:outline-none">
            <FolderPlus className={"w-5 h-5"} />
            <span className="ml-2">Add Questions</span>
          </button>
          <button className="mt-3 px-10 font-light bg-indigo-800 text-gray-100  py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center  focus:shadow-outline focus:outline-none">
            <CloudSave className={"w-5 h-5"} />
            <span className="ml-2">save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomTestTab;
