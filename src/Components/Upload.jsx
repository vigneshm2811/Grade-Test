import React from "react";
import { getDatabase, ref, push } from "firebase/database";
import firebaseApp from "../Firebase/Firebase";
import MyComponent from "./Mycomponent";

const Upload = () => {
  const uploadDataToRealtimeDB = async () => {
    const data = [
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
    ]; // Replace this with your actual data array

    const db = getDatabase(firebaseApp); // Get Realtime Database instance

    // Upload each item to Realtime Database
    data.forEach(async (itemData) => {
      try {
        await push(ref(db, "All_Questions"), itemData);
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
      <h2>Upload Data to Realtime Database</h2>
      <button
        className="bg-blue-600 p-2 text-white"
        onClick={uploadDataToRealtimeDB}
      >
        Upload Data
      </button>
      <MyComponent />
    </div>
  );
};

export default Upload;
