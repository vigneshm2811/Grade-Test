// loginPage icons
import GoogleIcon from "../assets/Logo/GoogleLogo.svg";
import LinkedInIcon from "../assets/Logo/LinkedinLogo.png";

//Sidebar icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhotoFilterOutlinedIcon from "@mui/icons-material/PhotoFilterOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

//Test Type Images
import Quiz from "../assets/TestTypeImages/quizTestType.png";
import English from "../assets/TestTypeImages/englishTestType.png";
import Program from "../assets/TestTypeImages/programmingTestType.png";
import Developer from "../assets/TestTypeImages/developer.png";
import Mathematics from "../assets/TestTypeImages/maths.png";
import English2 from "../assets/TestTypeImages/English.png";
import CustomTest from "../assets/TestTypeImages/CustomTest.png";
import Networks from "../assets/TestTypeImages/Networks.jpg";
import DSA from "../assets/TestTypeImages/DSA.jpg";

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
];

export const TestNavBarData = [
  {
    id: 1,
    label: "Home",
    Path: "/user/home",
  },
  {
    id: 2,
    label: "Test type",
    Path: "/user/test",
  },
  {
    id: 3,
    label: "Resource",
    Path: "/user/home",
  },
];

export const TestTypeData = [
  {
    id: 1,
    type: "Numeric",
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
    image: CustomTest,
  },
];

export const selectTest = [
  {
    id: 1,
    type: "numeric",
    title: "Quantitative",
    description: "Quantitative Aptitude Test",
    image: Mathematics,
  },
  {
    id: 2,
    type: "computer",
    title: "Programming",
    description: "Programming Basic MCQ",
    image: Developer,
  },
  {
    id: 3,
    type: "verbal",
    title: "English Skills",
    description: "Verbal Ability Test",
    image: English2,
  },
  {
    id: 4,
    type: "Computer Networks",
    title: "Networks and Security",
    description: "Computer Networks Test",
    image: Networks,
  },
  {
    id: 4,
    type: "DSA",
    title: "DSA",
    description: "Data structure and Algorithm",
    image: DSA,
  },
  {
    id: 5,
    type: "Custom Test",
    title: "Custom Test",
    description: "Customize your test as you need",
    image: CustomTest,
  },
];

export const verbalQuestionsData = [
  {
    id: 1,
    question: "What is the antonym of 'joy'?",
    options: ["Sorrow", "Laughter", "Happiness", "Glee"],
    answer: "Sorrow",
    points: 2,
    type: "verbal",
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
    type: "verbal",
  },
  {
    id: 4,
    question: "Which word means the same as 'abundant'?",
    options: ["Scarce", "Plentiful", "Sparse", "Meager"],
    answer: "Plentiful",
    points: 3,
    type: "verbal",
  },
  {
    id: 5,
    question: "What is the synonym for 'precise'?",
    options: ["Vague", "Exact", "General", "Ambiguous"],
    answer: "Exact",
    points: 1,
    type: "verbal",
  },
  {
    id: 6,
    question: "What is the antonym of 'brave'?",
    options: ["Courageous", "Fearless", "Cowardly", "Valiant"],
    answer: "Cowardly",
    points: 2,
    type: "verbal",
  },
  {
    id: 7,
    question: "Which word is similar to 'eccentric'?",
    options: ["Conventional", "Bizarre", "Ordinary", "Typical"],
    answer: "Bizarre",
    points: 1,
    type: "verbal",
  },
  {
    id: 8,
    question: "What is the opposite of 'honest'?",
    options: ["Loyal", "Dishonest", "Sincere", "Truthful"],
    answer: "Dishonest",
    points: 3,
    type: "verbal",
  },
  {
    id: 9,
    question: "Which word is synonymous with 'persistence'?",
    options: ["Inconsistency", "Resilience", "Indolence", "Inertia"],
    answer: "Resilience",
    points: 2,
    type: "verbal",
  },
  {
    id: 10,
    question: "What is the antonym of 'vivid'?",
    options: ["Dull", "Bright", "Lively", "Colorful"],
    answer: "Dull",
    points: 1,
    type: "verbal",
  },
  {
    id: 11,
    question: "What is the synonym for 'obsolete'?",
    options: ["Ancient", "New", "Outdated", "Modern"],
    answer: "Outdated",
    points: 2,
    type: "verbal",
  },
  {
    id: 12,
    question: "What is the opposite of 'excited'?",
    options: ["Bored", "Happy", "Enthusiastic", "Energetic"],
    answer: "Bored",
    points: 1,
    type: "verbal",
  },
  {
    id: 13,
    question: "Which word is similar to 'persistent'?",
    options: ["Lethargic", "Determined", "Irregular", "Flexible"],
    answer: "Determined",
    points: 3,
    type: "verbal",
  },
  {
    id: 14,
    question: "What is the antonym of 'transparent'?",
    options: ["Opaque", "Clear", "Translucent", "Visible"],
    answer: "Opaque",
    points: 1,
    type: "verbal",
  },
  {
    id: 15,
    question: "Which word means the same as 'complicated'?",
    options: ["Simple", "Difficult", "Elaborate", "Easy"],
    answer: "Elaborate",
    points: 3,
    type: "verbal",
  },
  {
    id: 16,
    question: "What is the synonym for 'furious'?",
    options: ["Calm", "Angry", "Peaceful", "Enraged"],
    answer: "Enraged",
    points: 2,
    type: "verbal",
  },
  {
    id: 17,
    question: "What is the opposite of 'ancient'?",
    options: ["New", "Outdated", "Modern", "Medieval"],
    answer: "Modern",
    points: 1,
    type: "verbal",
  },
  {
    id: 18,
    question: "Which word is similar to 'neglect'?",
    options: ["Attention", "Disregard", "Care", "Consideration"],
    answer: "Disregard",
    points: 2,
    type: "verbal",
  },
  {
    id: 19,
    question: "What is the antonym of 'vague'?",
    options: ["Clear", "Uncertain", "Ambiguous", "Definite"],
    answer: "Definite",
    points: 1,
    type: "verbal",
  },
  {
    id: 20,
    question: "Which word is synonymous with 'obsolete'?",
    options: ["New", "Outdated", "Ancient", "Modern"],
    answer: "Outdated",
    points: 3,
    type: "verbal",
  },
  {
    id: 21,
    question: "What is the synonym for 'confident'?",
    options: ["Nervous", "Unsure", "Assured", "Anxious"],
    answer: "Assured",
    points: 2,
    type: "verbal",
  },
  {
    id: 22,
    question: "What is the antonym of 'innocent'?",
    options: ["Guiltless", "Pure", "Sinless", "Guilty"],
    answer: "Guilty",
    points: 1,
    type: "verbal",
  },
  {
    id: 23,
    question: "Which word is similar to 'amazing'?",
    options: ["Unbelievable", "Ordinary", "Astonishing", "Common"],
    answer: "Astonishing",
    points: 3,
    type: "verbal",
  },
  {
    id: 24,
    question: "What is the opposite of 'harmony'?",
    options: ["Concord", "Unity", "Disharmony", "Agreement"],
    answer: "Disharmony",
    points: 1,
    type: "verbal",
  },
  {
    id: 25,
    question: "Which word means the same as 'luminous'?",
    options: ["Dark", "Bright", "Gloomy", "Shadowy"],
    answer: "Bright",
    points: 3,
    type: "verbal",
  },
  {
    id: 26,
    question: "What is the synonym for 'eloquent'?",
    options: ["Articulate", "Inarticulate", "Verbose", "Mute"],
    answer: "Articulate",
    points: 2,
    type: "verbal",
  },
  {
    id: 27,
    question: "What is the antonym of 'chaotic'?",
    options: ["Disorderly", "Organized", "Hectic", "Unruly"],
    answer: "Organized",
    points: 1,
    type: "verbal",
  },
  {
    id: 28,
    question: "Which word is similar to 'content'?",
    options: ["Displeased", "Satisfied", "Unhappy", "Miserable"],
    answer: "Satisfied",
    points: 2,
    type: "verbal",
  },
  {
    id: 29,
    question: "What is the opposite of 'capable'?",
    options: ["Skilled", "Incapable", "Able", "Competent"],
    answer: "Incapable",
    points: 1,
    type: "verbal",
  },
  {
    id: 30,
    question: "Which word is synonymous with 'resilient'?",
    options: ["Fragile", "Strong", "Delicate", "Vulnerable"],
    answer: "Strong",
    points: 3,
    type: "verbal",
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

export const numericalQuestions = [
  {
    id: 1,
    question: "What is 25% of 200?",
    options: ["40", "50", "75", "100"],
    answer: "50",
    points: 2,
    type: "numeric",
  },
  {
    id: 2,
    question: "What is the probability of rolling a 6 on a fair six-sided die?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    answer: "1/6",
    points: 3,
    type: "numeric",
  },
  {
    id: 3,
    question:
      "If a number increased from 20 to 30, what is the percentage increase?",
    options: ["20%", "30%", "40%", "50%"],
    answer: "50%",
    points: 1,
    type: "numeric",
  },
  {
    id: 4,
    question:
      "If a train travels at a speed of 60 km/hr, how far will it travel in 3 hours?",
    options: ["150 km", "180 km", "200 km", "240 km"],
    answer: "180 km",
    points: 3,
    type: "numeric",
  },
  {
    id: 5,
    question: "What is the square root of 144?",
    options: ["9", "10", "11", "12"],
    answer: "12",
    points: 1,
    type: "numeric",
  },
  {
    id: 6,
    question: "If 30% of a number is 45, what is the number?",
    options: ["120", "135", "150", "165"],
    answer: "150",
    points: 2,
    type: "numeric",
  },
  {
    id: 7,
    question:
      "If 20% of a number is subtracted from the number itself, the result is 64. What is the number?",
    options: ["80", "100", "120", "160"],
    answer: "80",
    points: 2,
    type: "numeric",
  },
  {
    id: 8,
    question:
      "If the perimeter of a rectangle is 40 meters and its length is 10 meters, what is its width?",
    options: ["5 meters", "10 meters", "15 meters", "20 meters"],
    answer: "5 meters",
    points: 3,
    type: "numeric",
  },
  {
    id: 9,
    question:
      "If a car travels at a speed of 60 km/hr, how long will it take to cover a distance of 300 km?",
    options: ["3 hours", "4 hours", "5 hours", "6 hours"],
    answer: "5 hours",
    points: 2,
    type: "numeric",
  },
  {
    id: 10,
    question:
      "If a shopkeeper increases the price of an item by 20% and then offers a discount of 10%, what is the effective percentage change in price?",
    options: ["8%", "10%", "12%", "14%"],
    answer: "8%",
    points: 1,
    type: "numeric",
  },
  {
    id: 11,
    question:
      "If a rectangle has a length of 8 cm and a width of 5 cm, what is its area?",
    options: ["25 square cm", "30 square cm", "35 square cm", "40 square cm"],
    answer: "40 square cm",
    points: 2,
    type: "numeric",
  },
  {
    id: 12,
    question:
      "If the sum of two numbers is 45 and their difference is 15, what are the numbers?",
    options: ["15, 30", "20, 25", "25, 20", "30, 15"],
    answer: "30, 15",
    points: 3,
    type: "numeric",
  },
  {
    id: 13,
    question:
      "If the price of an item is increased by 10% and then decreased by 20%, what is the net percentage change?",
    options: ["2% decrease", "4% decrease", "2% increase", "4% increase"],
    answer: "4% decrease",
    points: 2,
    type: "numeric",
  },
  {
    id: 14,
    question:
      "If the area of a square is 144 square meters, what is the length of its side?",
    options: ["12 meters", "14 meters", "16 meters", "18 meters"],
    answer: "12 meters",
    points: 2,
    type: "numeric",
  },
  {
    id: 15,
    question:
      "If the population of a town increased from 5000 to 6000 in one year, what is the percentage increase?",
    options: ["10%", "15%", "20%", "25%"],
    answer: "20%",
    points: 1,
    type: "numeric",
  },
  {
    id: 16,
    question:
      "If the sum of two consecutive even numbers is 42, what are the numbers?",
    options: ["20, 22", "22, 24", "24, 26", "26, 28"],
    answer: "20, 22",
    points: 2,
    type: "numeric",
  },
  {
    id: 17,
    question: "If a circle has a diameter of 14 cm, what is its circumference?",
    options: ["22 cm", "28 cm", "36 cm", "44 cm"],
    answer: "44 cm",
    points: 3,
    type: "numeric",
  },
  {
    id: 18,
    question:
      "If the interest earned on an investment of $5000 at a rate of 8% per annum is $400, what is the time period?",
    options: ["1 year", "2 years", "3 years", "4 years"],
    answer: "2 years",
    points: 2,
    type: "numeric",
  },
  {
    id: 19,
    question:
      "If the hypotenuse of a right-angled triangle is 10 cm and one side is 6 cm, what is the length of the other side?",
    options: ["6 cm", "8 cm", "10 cm", "12 cm"],
    answer: "8 cm",
    points: 2,
    type: "numeric",
  },
  {
    id: 20,
    question:
      "If the sale price of an item is $80 after a 20% discount, what was its original price?",
    options: ["$96", "$100", "$104", "$120"],
    answer: "$100",
    points: 1,
    type: "numeric",
  },
  {
    id: 21,
    question:
      "If a car travels at a speed of 60 km/h for 3 hours, how far does it travel?",
    options: ["120 km", "150 km", "180 km", "200 km"],
    answer: "180 km",
    points: 2,
    type: "numeric",
  },
  {
    id: 22,
    question:
      "If the price of a product is increased by 25% and then decreased by 20%, what is the net percentage change?",
    options: ["2% increase", "3% decrease", "4% increase", "5% decrease"],
    answer: "4% increase",
    points: 2,
    type: "numeric",
  },
  {
    id: 23,
    question:
      "If a number is increased by 20% and then decreased by 10%, what is the net percentage change?",
    options: ["8% increase", "8% decrease", "10% increase", "10% decrease"],
    answer: "8% increase",
    points: 2,
    type: "numeric",
  },
  {
    id: 24,
    question:
      "If the perimeter of a rectangle is 36 cm and its length is 10 cm, what is its width?",
    options: ["8 cm", "9 cm", "10 cm", "11 cm"],
    answer: "8 cm",
    points: 2,
    type: "numeric",
  },
  {
    id: 25,
    question:
      "If a box contains 24 chocolates and 3/4 of them are eaten, how many chocolates remain?",
    options: ["6", "12", "18", "24"],
    answer: "6",
    points: 2,
    type: "numeric",
  },
  {
    id: 26,
    question:
      "If the radius of a circle is doubled, by what factor does its circumference change?",
    options: ["No change", "2 times", "3 times", "4 times"],
    answer: "2 times",
    points: 2,
    type: "numeric",
  },
  {
    id: 27,
    question:
      "If the sum of three consecutive numbers is 75, what is the smallest number?",
    options: ["23", "24", "25", "26"],
    answer: "23",
    points: 2,
    type: "numeric",
  },
  {
    id: 28,
    question:
      "If the difference between two numbers is 8 and their product is 336, what are the numbers?",
    options: ["16, 24", "18, 26", "20, 28", "22, 30"],
    answer: "16, 24",
    points: 2,
    type: "numeric",
  },
  {
    id: 29,
    question:
      "If the area of a square is 100 square units, what is the length of its diagonal?",
    options: ["10 units", "12 units", "14 units", "16 units"],
    answer: "10 units",
    points: 2,
    type: "numeric",
  },
  {
    id: 30,
    question:
      "If a train travels at a speed of 80 km/h for 2.5 hours, how far does it travel?",
    options: ["180 km", "200 km", "250 km", "300 km"],
    answer: "200 km",
    points: 2,
    type: "numeric",
  },
];

export const programmingQuestions = [
  {
    id: 31,
    question:
      "What is the time complexity of inserting an element into a binary search tree (BST)?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(log n)",
    points: 2,
    type: "computer",
  },
  {
    id: 32,
    question:
      "Which data structure would you use to implement a LIFO (Last-In-First-Out) behavior?",
    options: ["Queue", "Stack", "Heap", "LinkedList"],
    answer: "Stack",
    points: 2,
    type: "computer",
  },
  {
    id: 33,
    question: "What does OOP stand for?",
    options: [
      "Object-Oriented Programming",
      "Object-Oriented Process",
      "Object-Oriented Protocol",
      "Object-Oriented Prototype",
    ],
    answer: "Object-Oriented Programming",
    points: 2,
    type: "computer",
  },
  {
    id: 34,
    question: "Which of the following is not a primitive data type in Java?",
    options: ["int", "float", "String", "boolean"],
    answer: "String",
    points: 2,
    type: "computer",
  },
  {
    id: 35,
    question: "What does HTTP stand for?",
    options: [
      "Hyperlink Text Transfer Protocol",
      "Hypertext Transfer Protocol",
      "Hyper Text Transfer Package",
      "Hypertext Text Transfer Package",
    ],
    answer: "Hypertext Transfer Protocol",
    points: 2,
    type: "computer",
  },
  {
    id: 36,
    question: "Which of the following is not a SQL data manipulation command?",
    options: ["SELECT", "DELETE", "INSERT", "DEFINE"],
    answer: "DEFINE",
    points: 2,
    type: "computer",
  },
  {
    id: 37,
    question: "What is the purpose of DNS (Domain Name System)?",
    options: [
      "To convert IP addresses to domain names",
      "To convert domain names to IP addresses",
      "To manage email communication",
      "To establish secure connections",
    ],
    answer: "To convert domain names to IP addresses",
    points: 2,
    type: "computer",
  },
  {
    id: 38,
    question: "What is the concept of inheritance in OOP?",
    options: [
      "The ability to define a new class that inherits properties and behaviors from an existing class",
      "The process of hiding the implementation details of an object",
      "The ability to access elements from a data structure based on their index",
      "The process of converting a high-level programming language into machine code",
    ],
    answer:
      "The ability to define a new class that inherits properties and behaviors from an existing class",
    points: 2,
    type: "computer",
  },
  {
    id: 39,
    question:
      "Which of the following sorting algorithms has the worst-case time complexity of O(n^2)?",
    options: ["Merge Sort", "Quick Sort", "Heap Sort", "Bubble Sort"],
    answer: "Bubble Sort",
    points: 2,
    type: "computer",
  },
  {
    id: 40,
    question: "What is the purpose of a constructor in Java?",
    options: [
      "To create a new instance of a class",
      "To destroy an instance of a class",
      "To define a method inside a class",
      "To initialize the attributes of a class",
    ],
    answer: "To initialize the attributes of a class",
    points: 2,
    type: "computer",
  },
  {
    id: 41,
    question:
      "What is the purpose of the 'finally' block in Java exception handling?",
    options: [
      "To define code that always runs, regardless of whether an exception is thrown or not",
      "To catch and handle specific types of exceptions",
      "To specify code that runs only if an exception is thrown",
      "To rethrow an exception that was caught in a catch block",
    ],
    answer:
      "To define code that always runs, regardless of whether an exception is thrown or not",
    points: 2,
    type: "computer",
  },
  {
    id: 42,
    question: "What does TCP/IP stand for?",
    options: [
      "Transport Control Protocol/Internet Protocol",
      "Transmission Control Protocol/Internet Protocol",
      "Transfer Control Protocol/Internet Protocol",
      "Telecommunication Control Protocol/Internet Protocol",
    ],
    answer: "Transmission Control Protocol/Internet Protocol",
    points: 2,
    type: "computer",
  },
  {
    id: 43,
    question: "Which of the following is not a valid SQL data type?",
    options: ["VARCHAR", "INTEGER", "BOOLEAN", "FLOATING"],
    answer: "FLOATING",
    points: 2,
    type: "computer",
  },
  {
    id: 44,
    question: "What is the purpose of a foreign key in a relational database?",
    options: [
      "To uniquely identify each record in a table",
      "To establish a connection between two tables based on a common column",
      "To ensure that a column cannot contain NULL values",
      "To define the primary index of a table",
    ],
    answer:
      "To establish a connection between two tables based on a common column",
    points: 2,
    type: "computer",
  },
  {
    id: 45,
    question:
      "What is the time complexity of finding an element in a hash table (assuming no collisions)?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(1)",
    points: 2,
    type: "computer",
  },
  {
    id: 46,
    question: "What is the difference between GET and POST requests in HTTP?",
    options: [
      "GET requests are used for sending large amounts of data, while POST requests are used for small amounts of data",
      "GET requests are cached, while POST requests are not",
      "GET requests are idempotent, while POST requests are not",
      "GET requests are more secure than POST requests",
    ],
    answer: "GET requests are idempotent, while POST requests are not",
    points: 2,
    type: "computer",
  },
  {
    id: 47,
    question: "What is a linked list?",
    options: [
      "A data structure that stores elements in a contiguous block of memory",
      "A data structure that consists of nodes where each node points to the next node in the sequence",
      "A sorting algorithm based on the divide and conquer approach",
      "A method for organizing data in a hierarchical structure",
    ],
    answer:
      "A data structure that consists of nodes where each node points to the next node in the sequence",
    points: 2,
    type: "computer",
  },
  {
    id: 48,
    question: "What is the purpose of an index in a database?",
    options: [
      "To ensure that each row in a table is unique",
      "To speed up the retrieval of data by providing quick access to specific rows in a table",
      "To define the relationships between tables in a database",
      "To enforce constraints on the data stored in a table",
    ],
    answer:
      "To speed up the retrieval of data by providing quick access to specific rows in a table",
    points: 2,
    type: "computer",
  },
  {
    id: 49,
    question: "What is polymorphism in OOP?",
    options: [
      "The ability to define multiple methods with the same name but different parameters",
      "The process of hiding the implementation details of an object",
      "The ability to define a new class that inherits properties and behaviors from an existing class",
      "The ability of an object to take on multiple forms",
    ],
    answer: "The ability of an object to take on multiple forms",
    points: 2,
    type: "computer",
  },
  {
    id: 50,
    question:
      "What is the purpose of a foreign key constraint in a relational database?",
    options: [
      "To ensure that a column cannot contain NULL values",
      "To uniquely identify each record in a table",
      "To define the primary index of a table",
      "To enforce referential integrity between two tables",
    ],
    answer: "To enforce referential integrity between two tables",
    points: 2,
    type: "computer",
  },
];

export const dsaQuestions = [
  {
    id: 1,
    question:
      "What is the time complexity of inserting an element at the end of an array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(1)",
    points: 2,
    type: "DSA",
  },
  {
    id: 2,
    question:
      "Which data structure is typically used for implementing LIFO (Last In First Out) behavior?",
    options: ["Queue", "Heap", "Stack", "Tree"],
    answer: "Stack",
    points: 2,
    type: "DSA",
  },
  {
    id: 3,
    question:
      "What is the time complexity of searching for an element in a binary search tree (BST)?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(log n)",
    points: 2,
    type: "DSA",
  },
  {
    id: 4,
    question:
      "Which sorting algorithm has the worst-case time complexity of O(n^2)?",
    options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Insertion Sort"],
    answer: "Bubble Sort",
    points: 2,
    type: "DSA",
  },
  {
    id: 5,
    question:
      "What data structure is typically used for implementing breadth-first search (BFS)?",
    options: ["Queue", "Stack", "Heap", "Linked List"],
    answer: "Queue",
    points: 2,
    type: "DSA",
  },
  {
    id: 6,
    question: "What is the worst-case time complexity of quicksort algorithm?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    answer: "O(n^2)",
    points: 2,
    type: "DSA",
  },
  {
    id: 7,
    question: "Which data structure is used for implementing priority queues?",
    options: ["Queue", "Stack", "Heap", "Linked List"],
    answer: "Heap",
    points: 2,
    type: "DSA",
  },
  {
    id: 8,
    question: "What is the time complexity of binary search in a sorted array?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    answer: "O(log n)",
    points: 2,
    type: "DSA",
  },
  {
    id: 9,
    question: "What is the space complexity of merge sort algorithm?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    answer: "O(n)",
    points: 2,
    type: "DSA",
  },
  {
    id: 10,
    question: "What is the purpose of a hash function in hashing?",
    options: [
      "To increase space complexity",
      "To decrease time complexity",
      "To map data to a fixed-size array",
      "To sort data efficiently",
    ],
    answer: "To map data to a fixed-size array",
    points: 2,
    type: "DSA",
  },
  {
    id: 11,
    question: "Which data structure uses LIFO (Last In First Out) ordering?",
    options: ["Queue", "Stack", "Heap", "Linked List"],
    answer: "Stack",
    points: 2,
    type: "DSA",
  },
  {
    id: 12,
    question: "What is the time complexity of linear search?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    answer: "O(n)",
    points: 2,
    type: "DSA",
  },
  {
    id: 13,
    question:
      "What is the time complexity of inserting an element in the middle of an array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(n)",
    points: 2,
    type: "DSA",
  },
  {
    id: 14,
    question: "What is the space complexity of a binary search tree?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    answer: "O(n)",
    points: 2,
    type: "DSA",
  },
  {
    id: 15,
    question: "Which data structure is used in depth-first search (DFS)?",
    options: ["Queue", "Stack", "Heap", "Linked List"],
    answer: "Stack",
    points: 2,
    type: "DSA",
  },
  {
    id: 16,
    question:
      "What is the time complexity of heapify operation in a binary heap?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    answer: "O(log n)",
    points: 2,
    type: "DSA",
  },
  {
    id: 17,
    question: "What is the space complexity of quicksort algorithm?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    answer: "O(log n)",
    points: 2,
    type: "DSA",
  },
  {
    id: 18,
    question:
      "Which of the following is an application of a stack data structure?",
    options: [
      "Undo functionality in text editors",
      "Routing in a network",
      "Implementing breadth-first search",
      "Representing a hierarchical relationship",
    ],
    answer: "Undo functionality in text editors",
    points: 2,
    type: "DSA",
  },
  {
    id: 19,
    question:
      "What is the time complexity of a binary search tree (BST) traversal?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    answer: "O(n)",
    points: 2,
    type: "DSA",
  },
  {
    id: 20,
    question:
      "What is the time complexity of deleting an element from the front of a queue?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(1)",
    points: 2,
    type: "DSA",
  },
];

export const computerNetworksQuestions = [
  {
    id: 1,
    question:
      "Which of the following layers of the OSI model is responsible for routing and addressing?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
    ],
    answer: "Network Layer",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 2,
    question:
      "What is the function of ARP (Address Resolution Protocol) in computer networks?",
    options: [
      "To convert IP addresses to MAC addresses",
      "To convert domain names to IP addresses",
      "To establish a secure connection between client and server",
      "To route packets across networks",
    ],
    answer: "To convert IP addresses to MAC addresses",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 3,
    question:
      "Which protocol is used for secure communication over a computer network?",
    options: ["HTTP", "FTP", "TCP", "SSL/TLS"],
    answer: "SSL/TLS",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 4,
    question:
      "What is the purpose of DHCP (Dynamic Host Configuration Protocol) in computer networks?",
    options: [
      "To convert IP addresses to MAC addresses",
      "To assign IP addresses dynamically to network devices",
      "To convert domain names to IP addresses",
      "To establish a secure connection between client and server",
    ],
    answer: "To assign IP addresses dynamically to network devices",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 5,
    question:
      "Which protocol is used for transferring files over the internet?",
    options: ["FTP", "HTTP", "SMTP", "SSH"],
    answer: "FTP",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 6,
    question: "What is the primary function of a router in a computer network?",
    options: [
      "To connect devices within the same network",
      "To connect multiple networks together",
      "To ensure secure communication between client and server",
      "To store and manage data packets",
    ],
    answer: "To connect multiple networks together",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 7,
    question:
      "Which protocol is used for sending and receiving email messages?",
    options: ["HTTP", "FTP", "SMTP", "POP3"],
    answer: "SMTP",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 8,
    question:
      "What is the purpose of NAT (Network Address Translation) in computer networks?",
    options: [
      "To convert IP addresses to MAC addresses",
      "To assign IP addresses dynamically to network devices",
      "To translate private IP addresses to public IP addresses",
      "To ensure secure communication between client and server",
    ],
    answer: "To translate private IP addresses to public IP addresses",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 9,
    question:
      "Which protocol is used for resolving domain names to IP addresses?",
    options: ["FTP", "HTTP", "DNS", "SMTP"],
    answer: "DNS",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 10,
    question:
      "What is the purpose of ICMP (Internet Control Message Protocol) in computer networks?",
    options: [
      "To transfer files between client and server",
      "To manage network traffic",
      "To diagnose network connectivity issues",
      "To secure communication between client and server",
    ],
    answer: "To diagnose network connectivity issues",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 11,
    question:
      "Which layer of the OSI model is responsible for error detection and correction?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
    ],
    answer: "Data Link Layer",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 12,
    question: "What is the function of a firewall in a computer network?",
    options: [
      "To connect devices within the same network",
      "To connect multiple networks together",
      "To filter and monitor incoming and outgoing network traffic",
      "To store and manage data packets",
    ],
    answer: "To filter and monitor incoming and outgoing network traffic",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 13,
    question:
      "Which protocol is used for secure shell access to a remote server?",
    options: ["FTP", "HTTP", "SSH", "SMTP"],
    answer: "SSH",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 14,
    question: "What is the purpose of a proxy server in a computer network?",
    options: [
      "To connect devices within the same network",
      "To connect multiple networks together",
      "To forward requests from clients to servers and vice versa",
      "To store and manage data packets",
    ],
    answer: "To forward requests from clients to servers and vice versa",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 15,
    question:
      "Which protocol is used for transferring hypertext documents over the internet?",
    options: ["FTP", "HTTP", "SMTP", "SSH"],
    answer: "HTTP",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 16,
    question:
      "What is the purpose of VLANs (Virtual Local Area Networks) in computer networks?",
    options: [
      "To connect devices within the same network",
      "To connect multiple networks together",
      "To isolate network traffic within a specific group of devices",
      "To ensure secure communication between client and server",
    ],
    answer: "To isolate network traffic within a specific group of devices",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 17,
    question:
      "Which protocol is used for transferring emails from a mail server to a client?",
    options: ["HTTP", "FTP", "SMTP", "POP3"],
    answer: "POP3",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 18,
    question: "What is the function of a switch in a computer network?",
    options: [
      "To connect devices within the same network",
      "To connect multiple networks together",
      "To forward data packets between devices within the same network",
      "To store and manage data packets",
    ],
    answer: "To forward data packets between devices within the same network",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 19,
    question:
      "Which protocol is used for transferring files securely over a network?",
    options: ["FTP", "HTTP", "SMTP", "SFTP"],
    answer: "SFTP",
    points: 2,
    type: "Computer Networks",
  },
  {
    id: 20,
    question: "What is the purpose of subnetting in computer networks?",
    options: [
      "To divide a large network into smaller subnetworks",
      "To establish secure connections between client and server",
      "To manage network traffic",
      "To translate private IP addresses to public IP addresses",
    ],
    answer: "To divide a large network into smaller subnetworks",
    points: 2,
    type: "Computer Networks",
  },
];
