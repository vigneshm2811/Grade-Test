import React, { useState } from "react";
import { EmailSender } from "../../helper/mailer";
import toast, { Toaster } from "react-hot-toast";

const Modal = ({ toggleModal, openStatus, testId }) => {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [error, setError] = useState(null);

  const toggleModals = () => {
    toggleModal();
  };

  const sendEmail = async () => {
    try {
      EmailSender(recipientEmail, testId);
      toggleModals();
      setRecipientEmail("");
    } catch (error) {
      toast.error("Enter Valid Email", {
        theme: "dark",
      });
      console.error("Error sending email:", error);
      setRecipientEmail("");
    }
  };

  return (
    <>
      {openStatus && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="p-4 md:p-5 text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Send Email Invitation to user
              </h3>
              <span className="text-sm text-red-500">{error}</span>
              <input
                className={`w-full my-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border  placeholder-gray-500 text-sm focus:outline-none ${
                  error !== null ? "border-red-500" : ""
                } focus:border-gray-400 focus:bg-white`}
                type="email"
                autoComplete="username"
                placeholder="Enter Email ID"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
              />
              <button
                onClick={sendEmail}
                type="button"
                className="bg-indigo-800 hover:bg-indigo-700 text-gray-100 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                Send Email
              </button>
              <button
                onClick={toggleModals}
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                No, cancel
              </button>
            </div>
          </div>
          <Toaster
            toastOptions={{
              className: "",
              style: {
                zIndex: "999",
              },
            }}
          />
        </div>
      )}
    </>
  );
};

export default Modal;
