import React, { useEffect, useState, useCallback, memo } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../../../assets/GradeTestLogo.png";
import { SideBarData } from "../../../../helper/mainData";
import { SvgIcon } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

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

const SideBar = memo(() => {
  const location = useLocation();
  const theme = useTheme();
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedIndex = sessionStorage.getItem("activeIndex");
    if (storedIndex !== null) {
      setActive(parseInt(storedIndex));
    }
  }, []);

  const handelActive = useCallback(
    (index, path) => {
      setActive(index);
      sessionStorage.setItem("activeIndex", index);
      navigate(path);
    },
    [navigate]
  );

  return (
    <Drawer
      variant="permanent"
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
        <img src={logo} alt="logo" className="w-40" />
      </DrawerHeader>
      <Divider />
      <List>
        {SideBarData?.map((e, index) => (
          <ListItem
            key={e?.id}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => handelActive(index, e?.path)}>
            <Link to={e?.path} style={{ textDecoration: "none" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "initial",
                  px: 2.5,
                  backgroundColor: active === index ? "#1c036f" : "",
                  "&:hover": {
                    backgroundColor: "#13014fa3",
                  },
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
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
                  sx={{ opacity: 1, color: "white" }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
});

export default SideBar;
