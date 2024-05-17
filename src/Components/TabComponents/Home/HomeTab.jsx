import React, { useEffect, useState } from "react";
import "./HomeTabStyles.scss";
import { selectTest } from "../../../helper/mainData";
import Loader from "../../Loader/Loader";
import { auth } from "../../../Firebase/Firebase";
import firebaseApp from "../../../Firebase/Firebase";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import MailIcon from "../../../IconsComponents/MailIcon";
import TrashIcon from "../../../IconsComponents/TrashIcon";
import CustomModal from "../../Modal/CustomModal";
import { CircularProgress } from "@mui/material";
import CustomTestCard from "../../CustomTestCard/CustomTestCard";

const HomeTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentLoader, setContentLoader] = useState(true);
  const [open, setOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentTest, setCurrentTest] = useState(null);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [currentTestId, setCurrentTestId] = useState(null);

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCardClick = (index) => {
    setActiveIndex(index);
    setButtonDisable(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1500);
  });

  useEffect(() => {
    fetchActiveTests();
  }, []);

  const fetchActiveTests = async () => {
    try {
      // setContentLoader(true);
      const db = getFirestore(firebaseApp);
      const activeTestsCollection = collection(db, "ActiveTests");
      const querySnapshot = await getDocs(activeTestsCollection);
      const activeTestsData = querySnapshot.docs.map((doc) => ({
        uniqueId: doc.id,
        ...doc.data(),
      }));
      setCurrentTest(activeTestsData);
    } catch (error) {
      console.error("Error fetching active tests:", error);
    } finally {
      setTimeout(() => {
        setContentLoader(false);
      }, 300);
    }
  };

  const handleCreateTest = () => {
    if (activeIndex !== null) {
      const selectTestData = {
        ...selectTest[activeIndex],
        requiterId: auth?.currentUser?.uid,
        requiterName: auth?.currentUser?.displayName,
        email: auth?.currentUser?.email,
        imageUrl: auth?.currentUser?.photoURL,
        creationDate: formattedDate,
      };
      const array = [];
      array.push(selectTestData);

      const db = getFirestore(firebaseApp);

      array.forEach(async (itemData) => {
        try {
          await addDoc(collection(db, "ActiveTests"), itemData);
          // console.log(`Item with ID ${itemData.id} uploaded successfully`);
        } catch (error) {
          console.error(`Error uploading item with ID ${itemData.id}: `, error);
        }
      });
    }

    fetchActiveTests();
    setButtonDisable(true);
    setActiveIndex(null);
  };

  const handelInvite = (testId) => {
    setCurrentTestId(testId);
    toggleModal();
  };

  const handleDelete = async (id) => {
    const db = getFirestore(firebaseApp);
    const taskDocRef = doc(db, "ActiveTests", id);
    try {
      await deleteDoc(taskDocRef);
      fetchActiveTests();
    } catch (err) {
      console.error("Error deleting document: ", err);
      alert("Error deleting document");
    }
  };

  return (
    <>
      {open ? (
        <Loader />
      ) : (
        <div className="py-3 px-5">
          <div className="select-test flex justify-center flex-wrap lg:justify-between gap-10 py-5">
            {selectTest?.map((test, i) => {
              return (
                <CustomTestCard
                  key={i}
                  CustomClass={
                    activeIndex === i ? "border-blue-800 border-2" : ""
                  }
                  handleCardClick={() => handleCardClick(i, test)}
                  image={test?.image}
                  title={test?.title}
                  description={test?.description}
                />
              );
            })}
          </div>

          <div className="flex justify-end">
            <button
              className={`${
                buttonDisable ? "bg-gray-300" : "bg-[#1e3a8a] text-white"
              }  px-5 py-2 rounded-md`}
              disabled={buttonDisable}
              onClick={handleCreateTest}>
              Create Test
            </button>
          </div>

          <div className="active-test">
            <div className="flex flex-col mt-8">
              <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 ">
                <div className="inline-block min-w-full  overflow-hidden align-middle border-b shadow-lg border-gray-200 sm:rounded-lg">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 ">
                          Author
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 ">
                          Test Name
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 ">
                          Status
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 ">
                          Created Date
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 ">
                          Action
                        </th>
                      </tr>
                    </thead>

                    {
                      <tbody className="bg-white">
                        <tr className="flex  w-full justify-center">
                          <td> {contentLoader && <CircularProgress />}</td>
                        </tr>
                        {!contentLoader &&
                          currentTest?.map((e, i) => {
                            return (
                              <tr key={i}>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 w-10 h-10">
                                      <img
                                        className="w-10 h-10 rounded-full"
                                        src={e?.imageUrl}
                                        alt="user"
                                      />
                                    </div>

                                    <div className="ml-4">
                                      <div className="text-sm font-medium leading-5 text-gray-900">
                                        {auth?.currentUser?.uid ===
                                        e?.requiterId
                                          ? "You"
                                          : e?.requiterName}
                                      </div>
                                      <div className="text-sm leading-5 text-gray-500">
                                        {e?.email}
                                      </div>
                                    </div>
                                  </div>
                                </td>

                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                  <div className="text-sm leading-5 text-gray-900">
                                    {e?.description}
                                  </div>
                                </td>

                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                  <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                    Active
                                  </span>
                                </td>

                                <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                  {e?.creationDate}
                                </td>

                                <td className="px-6 py-4 text-sm font-medium leading-5  whitespace-no-wrap border-b border-gray-200">
                                  <div
                                    className="flex gap-2 items-center text-sm text-gray-500 cursor-pointer mb-2"
                                    onClick={() => handelInvite(e.uniqueId)}>
                                    <MailIcon
                                      className={`text-gray-500 w-5 h-5`}
                                    />
                                    <span>Invite</span>
                                  </div>
                                  <div
                                    className="flex gap-2 items-center text-sm  text-gray-500 cursor-pointer"
                                    onClick={() => handleDelete(e?.uniqueId)}>
                                    <TrashIcon
                                      className={`text-gray-500 w-5 h-5 `}
                                    />
                                    <span>Remove</span>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    }
                  </table>

                  <CustomModal
                    openStatus={isOpen}
                    toggleModal={toggleModal}
                    testId={currentTestId}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeTab;
