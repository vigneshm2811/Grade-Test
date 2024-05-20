import logo from "../../assets/Logo/GradeTestLogo.png";
import userAvatar from "../../assets/icons/user-avatar.png";
import { TestNavBarData } from "../../helper/mainData";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const TestNavBar = () => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  const [user, setUser] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
  };
  const handleClose = () => setOpen(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
    setAnchorElUser(null);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {" "}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <p className="text-center "> Do you really want to log out?</p>

          <div className="flex justify-center gap-5 mt-4">
            <button
              onClick={handleCloseUserMenu}
              className="bg-blue-900 text-white w-14 py-1 rounded-md">
              Yes
            </button>
            <button
              onClick={() => handleClose()}
              className="bg-gray-500 text-white w-14 py-1 h-9  rounded-md">
              No
            </button>
          </div>
        </Box>
      </Modal>
      <div className="sticky top-0  z-10">
        <nav className="bg-[#060430] border-[1px] border-gray-300 text-white shadow-md">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <img src={logo} alt="logo" className="h-14 w-32 cursor-pointer " />
            <div className="flex items-center  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse cursor-pointer">
              <span className=" text-xl  me-2">Hi, {user?.displayName}</span>
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
                onClose={() => {
                  setAnchorElUser(null);
                }}>
                <MenuItem onClick={() => setOpen(true)}>
                  <p className="text-center">Log Out</p>
                </MenuItem>
              </Menu>
              <div className="w-10 h-10 rounded-full">
                <img
                  className=""
                  src={imageError ? user?.photoURL : userAvatar}
                  alt="user"
                  onClick={handleOpenUserMenu}
                />
              </div>
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
    </>
  );
};

export default TestNavBar;
