import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";

import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { auth } from "../../../../Firebase/Firebase";

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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);
  console.log("user data", user);
  const theme = useTheme();
  const [open, setOpen] = React.useState(openStatus);

  const handleDrawerOpen = () => {
    setOpen(true);
    handleOpen();
  };

  return (
    <div>
      <AppBar
        position="fixed"
        open={openStatus}
        sx={{
          background: "white",
          color: "black",
        }}>
        <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,

              ...(openStatus && { display: "none" }),
            }}>
            <MenuIcon />
          </IconButton>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center">
            <img
              src={user?.photoURL}
              alt=""
              className="w-10 h-10 rounded-full"
              />
          </button>
              {/* <p>{user?.displayName}</p> */}
        </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
