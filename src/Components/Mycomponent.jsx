import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseApp from "../Firebase/Firebase";

const MyComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const firestore = getFirestore(firebaseApp);
      const questionsCollection = collection(firestore, "VerbalQuestions"); // Correct collection name
      const questionsSnapshot = await getDocs(questionsCollection);
      const questionsData = questionsSnapshot.docs.map((doc) => doc.data());
      setQuestions(questionsData);
    } catch (error) {
      setError(error.message);
    }
  };
  console.log("data", questions);
  return (
    <div>
      <h1>Questions</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <p>Question: {question.question}</p>
            <p>Options: {question.options.join(", ")}</p>
            <p>Answer: {question.answer}</p>
            <p>Points: {question.points}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
