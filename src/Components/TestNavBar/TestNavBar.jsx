import React from "react";
import logo from "../../assets/Logo/LogoOriginal.png";
import { TestNavBarData } from "../../helper/mainData";
import { Link } from "react-router-dom";

const TestNavBar = () => {
  return (
    <div className="sticky top-0  z-10">
      <nav className="bg-gray-100 border-[1px] border-gray-300 text-[#36328a] shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img
            src={logo}
            alt="logo"
            className="h-14 w-32 cursor-pointer rounded-md"
          />
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 "
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img
                className="w-12 h-12 rounded-full"
                src={logo}
                alt="user photo"
              />
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user">
            <ul className="flex flex-col text-xl p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              {TestNavBarData.map((e) => {
                return (
                  <Link key={e.id}>
                    <li>
                      <span className="block py-2 px-3  rounded md:hover:bg-transparent cursor-pointer">
                        {e.label}
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TestNavBar;
