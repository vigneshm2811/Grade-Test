import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";

import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { auth } from "../../../../Firebase/Firebase";
import { Box, Menu, MenuItem, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 260;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const NavBar = ({ openStatus, handleOpen }) => {
  const [user, setUser] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

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

  const theme = useTheme();

  const handleClose = () => setOpen(false);
  const handleDrawerOpen = () => {
    setOpen(true);
    handleOpen();
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <div>
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

      <div className="flex items-center gap-3">
        <p className="text-black">{user?.displayName}</p>
        <button
          className="flex items-center justify-center"
          onClick={handleOpenUserMenu}>
          <img src={user?.photoURL} alt="" className="w-10 h-10 rounded-full" />
        </button>

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
      </div>
    </div>
  );
};

export default NavBar;
