// loginPage icons
import GoogleIcon from "../assets/Logo/GoogleLogo.svg";
import LinkedInIcon from "../assets/Logo/LinkedinLogo.png";

//Sidebar icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhotoFilterOutlinedIcon from "@mui/icons-material/PhotoFilterOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export const LoginFormData = [
  {
    id: 1,
    SingInType: "Sign In with Google",
    icon: GoogleIcon,
    type: "google",
  },
  {
    id: 2,
    SingInType: "Sign In with LinkedIn",
    icon: LinkedInIcon,
    type: "linkedIn",
  },
];

export const SideBarData = [
  {
    id: 1,
    label: "Home",
    icon: HomeOutlinedIcon,
    path: "",
  },
  {
    id: 2,
    label: "Custom Test",
    icon: PhotoFilterOutlinedIcon,
    path: "custom-test",
  },
  {
    id: 3,
    label: "Latest Attempts",
    icon: AssessmentOutlinedIcon,
    path: "attempts",
  },
  {
    id: 4,
    label: "Profile",
    icon: PersonOutlineOutlinedIcon,
    path: "profile",
  },
];


export const TestNavBarData = [
  {
    id: 1,
    label: "Home",
    Path: "",
  },
  {
    id: 2,
    label: "Test type",
    Path: "",
  },
  {
    id: 3,
    label: "Resource",
    Path: "",
  },
];
