import React from "react";
import "animate.css";

const CustomTestCard = ({
  image,
  title,
  description,
  CustomClass,
  handleCardClick,
}) => {
  return (
    <>
      <div
        className={`${CustomClass} flex 2xl:w-[430px] xl:w-[380px] w-[85%] cursor-pointer  items-center  rounded-lg shadow bg-gray-100 `}
        onClick={handleCardClick}>
        <img
          className="object-cover rounded-t-lg w-36 h-28 md:rounded-none md:rounded-s-lg"
          src={image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default CustomTestCard;
