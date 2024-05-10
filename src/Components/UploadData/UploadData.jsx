import React from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseApp from "../../Firebase/Firebase";

const Upload = () => {
  const uploadDataToFirestore = async () => {
    const data = [];

    const firestore = getFirestore(firebaseApp); // Get Firestore instance

    // Upload each question to Firestore
    data.forEach(async (questionData) => {
      try {
        await addDoc(collection(firestore, "Questions"), questionData);
        console.log(
          `Question with ID ${questionData.id} uploaded successfully`
        );
      } catch (error) {
        console.error(
          `Error uploading question with ID ${questionData.id}: `,
          error
        );
      }
    });
  };

  return (
    <div>
      <h2>Upload Data to Firestore</h2>
      <button
        className="bg-blue-600 p-2 text-white"
        onClick={uploadDataToFirestore}>
        Upload Data
      </button>
    </div>
  );
};

export default Upload;
