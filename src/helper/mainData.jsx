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



export const verbalQuestionsData = [
  {
    id: 1,
    question: "What is the antonym of 'joy'?",
    options: ["Sorrow", "Laughter", "Happiness", "Glee"],
    answer: "Sorrow",
    points: 2,
  },
  {
    id: 2,
    question: "Which word is a synonym of 'enormous'?",
    options: ["Tiny", "Small", "Huge", "Gigantic"],
    answer: "Gigantic",
    points: 3,
  },
  {
    id: 3,
    question: "What is the opposite of 'expand'?",
    options: ["Shrink", "Grow", "Enlarge", "Increase"],
    answer: "Shrink",
    points: 1,
  },
  {
    id: 4,
    question: "Which word means the same as 'abundant'?",
    options: ["Scarce", "Plentiful", "Sparse", "Meager"],
    answer: "Plentiful",
    points: 3,
  },
  {
    id: 5,
    question: "What is the synonym for 'precise'?",
    options: ["Vague", "Exact", "General", "Ambiguous"],
    answer: "Exact",
    points: 1,
  },
  {
    id: 6,
    question: "What is the antonym of 'brave'?",
    options: ["Courageous", "Fearless", "Cowardly", "Valiant"],
    answer: "Cowardly",
    points: 2,
  },
  {
    id: 7,
    question: "Which word is similar to 'eccentric'?",
    options: ["Conventional", "Bizarre", "Ordinary", "Typical"],
    answer: "Bizarre",
    points: 1,
  },
  {
    id: 8,
    question: "What is the opposite of 'honest'?",
    options: ["Loyal", "Dishonest", "Sincere", "Truthful"],
    answer: "Dishonest",
    points: 3,
  },
  {
    id: 9,
    question: "Which word is synonymous with 'persistence'?",
    options: ["Inconsistency", "Resilience", "Indolence", "Inertia"],
    answer: "Resilience",
    points: 2,
  },
  {
    id: 10,
    question: "What is the antonym of 'vivid'?",
    options: ["Dull", "Bright", "Lively", "Colorful"],
    answer: "Dull",
    points: 1,
  },
];

export const ResultDataCards = [
  {
    id: 1,
    type: "noOfQuestion",
    label: "Total Num of Questions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-yellow-300">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
      </svg>
    ),
  },
  {
    id: 2,
    type: "questionsAttempt",
    label: "Questions Attempted",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 text-blue-300">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
      </svg>
    ),
  },
  {
    id: 3,
    type: "correctlyAnswered",
    label: "Correctly Answered",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 text-green-500">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
      </svg>
    ),
  },
  {
    id: 4,
    type: "pointsScored",
    label: "Points Scored",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 text-red-400">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    ),
  },
];


