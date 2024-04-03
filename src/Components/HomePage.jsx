import React from "react";
import MainLogo from "../assets/GradeTestLogo.png";
import { Link } from "react-router-dom";



const HomePage = () => {
  return (
    <div className="w-full h-screen flex ">
      <div className="bg-black w-1/2 flex justify-center items-center">
        <img src={MainLogo} alt="logo" />
      </div>

      <div className="bg-[#28208c] text-white w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-center text-5xl font-normal py-5 tracking-wider	 leading-snug">
          GREAT THINGS <br /> ARE COMING
        </h1>

       <Link to="/login">
       <button to="/login" class="focus:outline-none font-medium bg-white py-2 px-5 my-3 [box-shadow:3px_1px_10px_1px_#f7f1f1] hover:text-white  flex items-center justify-center cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#b8b2f1] before:to-[#918aec] before:transition-all before:duration-500 before:ease-in-out before:z-[-1]  hover:before:left-0 text-[#28208c]">
        Learn More
        </button>
       </Link>

       

     
      </div>
    </div>
  );
};

export default HomePage;
