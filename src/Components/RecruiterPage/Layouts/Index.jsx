import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import HomeIcon from "@mui/icons-material/Home";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

export default function LayoutRecruiterPage() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex",height:"100vh" }}>
      <CssBaseline />

      <SideBar openStatus={open} handleClose={handleDrawerClose} />
      
      <NavBar openStatus={open} handleOpen={handleDrawerOpen} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, bgcolor: "#f6f5f5", height: "100%", width: `calc(100% - ${drawerWidth}px)`, }}>
        <DrawerHeader />
        <div className="">
          <div className="subNav flex gap-1 items-center">
            <div>
              <HomeIcon sx={{ color: "gray" }} />
            </div>
            <div>
              <ChevronRightIcon sx={{ color: "gray" }} />
            </div>
            <p className="font-semibold">Home</p>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </Box>
    </Box>
  );
}
