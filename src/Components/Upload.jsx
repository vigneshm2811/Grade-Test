import React from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseApp from "../Firebase/Firebase";
import MyComponent from "./Mycomponent";

const Upload = () => {
  const uploadDataToFirestore = async () => {
    const data = [
      {
        id: 1,
        question: "What is 25% of 200?",
        options: ["40", "50", "75", "100"],
        answer: "50",
        points: 2,
        type: "numeric",
      },
      // Add the rest of your data here
    ];

    const db = getFirestore(firebaseApp);

    data.forEach(async (itemData) => {
      try {
        await addDoc(collection(db, "All_Questions"), itemData);
        console.log(
          `Item with ID ${itemData.id} uploaded successfully`
        );
      } catch (error) {
        console.error(
          `Error uploading item with ID ${itemData.id}: `,
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
        onClick={uploadDataToFirestore}
      >
        Upload Data
      </button>
      <MyComponent />
    </div>
  );
};

export default Upload;
