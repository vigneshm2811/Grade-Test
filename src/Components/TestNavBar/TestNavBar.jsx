import logo from "../../assets/Logo/LogoOriginal.png";
import { TestNavBarData } from "../../helper/mainData";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const TestNavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    auth
      .signOut()
      .then(() => {
        // Logout successful
        console.log("User logged out successfully");
        navigate("/login");
      })
      .catch((error) => {
        // An error occurred during logout
        console.error("Error logging out:", error);
      });
    setAnchorElUser(null);
  };

  useEffect(() => {
    // Subscribe to the Firebase authentication state
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Update the user state when authentication state changes
    });

    // Unsubscribe from the authentication state listener when the component unmounts
    return () => unsubscribe();
  }, []);
  console.log("user data", user);

  return (
    <div className="sticky top-0  z-10">
      <nav className="bg-gray-100 border-[1px] border-gray-300 text-[#36328a] shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img
            src={logo}
            alt="logo"
            className="h-14 w-32 cursor-pointer rounded-md"
          />
          <div className="flex items-center  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse cursor-pointer">
            <span className=" text-xl text-black me-2">
              Hi, {user?.displayName}
            </span>
            <Menu
              sx={{ mt: "50px", p: "0px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              <MenuItem onClick={handleCloseUserMenu}>
                <p className="text-center">Log Out</p>
              </MenuItem>
            </Menu>
            <img
              className="w-12 h-12 rounded-full"
              src={user?.photoURL}
              alt="user photo"
              onClick={handleOpenUserMenu}
            />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user">
            <ul className="flex flex-col text-xl p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              {TestNavBarData.map((e) => {
                return (
                  <Link key={e.id} to={e.Path}>
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
