import React from "react"; // Importing React library
import ReactDOM from "react-dom"; // Importing ReactDOM for rendering the app
import "./index.css"; // Importing global CSS file
import { Provider } from "react-redux"; // Importing Provider from react-redux to connect Redux store
import store from "./reduxStore/store.js"; // Importing Redux store
import { AppRouter } from "./Routes/routes.jsx";

// Rendering the application to the DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>{AppRouter}</Provider>{" "}
    {/* Wrapping the app with Provider to connect Redux store */}
  </React.StrictMode>
);
