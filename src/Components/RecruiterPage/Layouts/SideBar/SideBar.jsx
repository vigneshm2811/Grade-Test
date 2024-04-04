import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";

import MuiDrawer from "@mui/material/Drawer";

import List from "@mui/material/List";

import Divider from "@mui/material/Divider";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import logo from "../../../../assets/GradeTestLogo.png";

import { SideBarData } from "../../../../helper/mainData";
import { SvgIcon } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 260;

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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(0);

  const navigate = useNavigate();

  const handelActive = (index, path) => {
    setActive(index);
    navigate(path);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#030212",
          color: "#eeeeee",
        },
      }}>
      <DrawerHeader
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {/* <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton> */}
        <img src={logo} alt="logo" className="w-40" />
      </DrawerHeader>
      <Divider />
      <List>
        {SideBarData?.map((e, index) => {
          return (
            <ListItem
              key={e?.id}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handelActive(index, e?.path)}>
              <Link>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    backgroundColor: active === index ? "#1c036f" : "",
                    "&:hover": {
                      backgroundColor: "#13014fa3",
                    },
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}>
                    <SvgIcon
                      component={e?.icon}
                      inheritViewBox
                      sx={{ fontSize: "28px", color: "white" }}
                    />
                  </ListItemIcon>

                  <ListItemText
                    primary={e?.label}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
