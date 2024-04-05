// loginPage icons
import GoogleIcon from "../assets/Logo/GoogleLogo.svg";
import LinkedInIcon from "../assets/Logo/LinkedinLogo.png";

//Sidebar icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhotoFilterOutlinedIcon from "@mui/icons-material/PhotoFilterOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

//Test Type Images
import Quiz from "../assets/TestTypeImages/quizTestType.png"
import English from "../assets/TestTypeImages/englishTestType.png"
import Program from "../assets/TestTypeImages/programmingTestType.png"

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

export const TestTypeData = [
  {
    id: 1,
    type: "Quiz",
    description:
      "Test for knowledge of specific skills using Equip's content or your own.",
    image: Quiz,
  },
  {
    id: 2,
    type: "Programming",
    description:
      "Similar to HackerRank. We automatically rank candidates' code. No more manual evaluation.",
    image: Program,
  },
  {
    id: 3,
    type: "English Skills",
    description:
      "Listening, Reading, Writing and Speaking tests for language, communication, Grammar & Vocabulary.",
    image: English,
  },
  {
    id: 4,
    type: "Custom Test",
    description:
      "Test for knowledge of specific skills using Equip's content or your own.",
    image: English,
  },
];



export const verbalQuestionsData =
[
  {
    "id": 1,
    "question": "What is the antonym of 'joy'?",
    "options": ["Sorrow", "Laughter", "Happiness", "Glee"],
    "answer": "Sorrow"
  },
  {
    "id": 2,
    "question": "Which word is a synonym of 'enormous'?",
    "options": ["Tiny", "Small", "Huge", "Gigantic"],
    "answer": "Gigantic"
  },
  {
    "id": 3,
    "question": "What is the opposite of 'expand'?",
    "options": ["Shrink", "Grow", "Enlarge", "Increase"],
    "answer": "Shrink"
  },
  {
    "id": 4,
    "question": "Which word means the same as 'abundant'?",
    "options": ["Scarce", "Plentiful", "Sparse", "Meager"],
    "answer": "Plentiful"
  },
  {
    "id": 5,
    "question": "What is the synonym for 'precise'?",
    "options": ["Vague", "Exact", "General", "Ambiguous"],
    "answer": "Exact"
  },
  {
    "id": 6,
    "question": "What is the antonym of 'brave'?",
    "options": ["Courageous", "Fearless", "Cowardly", "Valiant"],
    "answer": "Cowardly"
  },
  {
    "id": 7,
    "question": "Which word is similar to 'eccentric'?",
    "options": ["Conventional", "Bizarre", "Ordinary", "Typical"],
    "answer": "Bizarre"
  },
  {
    "id": 8,
    "question": "What is the opposite of 'honest'?",
    "options": ["Loyal", "Dishonest", "Sincere", "Truthful"],
    "answer": "Dishonest"
  },
  {
    "id": 9,
    "question": "Which word is synonymous with 'persistence'?",
    "options": ["Inconsistency", "Resilience", "Indolence", "Inertia"],
    "answer": "Resilience"
  },
  {
    "id": 10,
    "question": "What is the antonym of 'vivid'?",
    "options": ["Dull", "Bright", "Lively", "Colorful"],
    "answer": "Dull"
  }
]

