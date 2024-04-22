import React, { useEffect, useState } from "react";
import "./HomeTabStyles.scss";
import { selectTest } from "../../../../helper/mainData";
import Loader from "../../../Loader/Loader";
import  { auth } from "../../../../Firebase/Firebase";
import firebaseApp from "../../../../Firebase/Firebase";
import { getFirestore, collection, addDoc,getDocs } from "firebase/firestore";

const HomeTab = () => {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0"); 
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); 
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  const [open, setOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  const [currentTest, setCurrentTest] = useState(null);
  const [buttonDisable, setButtonDisable] = useState(true);

  const handleCardClick = (index) => {
    setActiveIndex(index);
    setButtonDisable(false)
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
    const db = getFirestore(firebaseApp);
    const activeTestsCollection = collection(db, "ActiveTests");
    const querySnapshot = await getDocs(activeTestsCollection);
    const activeTestsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(activeTestsData,"active")
    setCurrentTest(activeTestsData);
  };
  const handleCreateTest = () => {
    // console.log("new",selectTest[activeIndex])

    // console.log("user", auth.currentUser);
    
      if(activeIndex !== null){
        
        const selectTestData = {
          ...selectTest[activeIndex],
          requiterId:auth?.currentUser?.uid,
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
      }
    

    
    fetchActiveTests();
    setButtonDisable(true)
    setActiveIndex(null);
  };

  console.log("created test", currentTest);

  return (
    <>
      {open ? (
        <Loader />
      ) : (
        <div className="py-3 px-5">
          <div className="select-test flex justify-center gap-10 py-5">
            {selectTest?.map((test, i) => {
              return (
                <div
                  className={`card shadow-xl cursor-pointer bg-indigo-50 ${
                    activeIndex === i ? "border-blue-800 border-2" : ""
                  }`}
                  key={i}
                  onClick={() => handleCardClick(i, test)}>
                  <div class="card-image">
                    <img src={test.image} alt="" className=" w-full max-h-48" />
                  </div>
                  <div class="category text-center font-xl font-semibold py-5">
                    {" "}
                    {test?.type}{" "}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end">
            <button
              className={`${buttonDisable?"bg-gray-300":"bg-[#1e3a8a] text-white"}  px-5 py-2 rounded-md`}
              disabled={buttonDisable}
              onClick={handleCreateTest}>
              Create Test
            </button>
          </div>

          <div className="active-test">
            {/* <div className="bg-white shadow-md rounded-xl">
          <div className="flex">
            <div>
              <p className="text-blue-800">Quantitative Aptitude Test</p>
            </div>

          </div>
        </div> */}

            <div class="flex flex-col mt-8">
              <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 ">
                <div class="inline-block min-w-full overflow-hidden align-middle border-b shadow-lg border-gray-200 shadow sm:rounded-lg">
                  <table class="min-w-full">
                    <thead>
                      <tr>
                        <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                          Author
                        </th>
                        <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                          Test Name
                        </th>
                        <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                          Status
                        </th>
                        <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                          Created Date
                        </th>
                        <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody class="bg-white">
                      {currentTest?.map((e, i) => {
                        return (
                          <tr key={i}>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div class="flex items-center">
                                <div class="flex-shrink-0 w-10 h-10">
                                  <img
                                    class="w-10 h-10 rounded-full"
                                    src={e?.imageUrl}
                                    alt="user"
                                  />
                                </div>

                                <div class="ml-4">
                                  <div class="text-sm font-medium leading-5 text-gray-900">
                                    {auth?.currentUser?.uid=== e?.requiterId ? "You": e?.requiterName}
                                  </div>
                                  <div class="text-sm leading-5 text-gray-500">
                                    {e?.email}
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div class="text-sm leading-5 text-gray-900">
                                {e?.description}
                              </div>
                            </td>

                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                Active
                              </span>
                            </td>

                            <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                              {e?.creationDate}
                            </td>

                            <td class="px-6 py-4 text-sm font-medium leading-5  whitespace-no-wrap border-b border-gray-200">
                              <a
                                href="#"
                                class="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
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
