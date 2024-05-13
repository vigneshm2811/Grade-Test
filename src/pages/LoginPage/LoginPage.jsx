import React, { useState } from "react";
import MainLogo from "../../assets/GradeTestLogo.png";
import "./LoginPageStyles.scss";
import RoleSelect from "./RoleSelect";
import "firebase/auth";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const [selectedOption, setSelectedOption] = useState("user");
  // Function to handle radio button change
  const handleOptionToggle = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-full h-screen  md:flex md:bg-black bg-[#030212] py-10 md:p-0 ">
      <div className="hidden md:w-1/2 w-full md:flex justify-center items-center">
        <img src={MainLogo} alt="logo" className="mx-auto w-3/4 md:w-auto" />
      </div>

      <div className=" md:bg-gray-100 w-full  md:w-1/2 flex flex-col justify-center items-center">
        <div className="py-10">
          <RoleSelect handleOptionToggle={handleOptionToggle} />
        </div>

        <LoginForm selectedOption={selectedOption} />
      </div>
    </div>
  );
};

export default LoginPage;
