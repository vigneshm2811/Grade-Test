import React, { useEffect, useState } from "react";
import firebaseApp from "../../Firebase/Firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const LatestAttemptTab = () => {
  const [currentTest, setCurrentTest] = useState([]);

  useEffect(() => {
    fetchActiveTests();
  }, []);

  function formatDateTime(dateTime) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    return new Date(dateTime).toLocaleString("en-US", options);
  }

  const fetchActiveTests = async () => {
    const db = getFirestore(firebaseApp);
    const activeTestsCollection = collection(db, "userResults");
    const querySnapshot = await getDocs(activeTestsCollection);
    const activeTestsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setCurrentTest(activeTestsData);
  };

  return (
    <div>
      <div class="flex flex-col mt-8">
        <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:px-8 ">
          <div class="inline-block min-w-full overflow-hidden align-middle border-b shadow-lg border-gray-200  sm:rounded-lg">
            <table class="w-full">
              <thead>
                <tr>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    User
                  </th>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Total questions
                  </th>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Attempted
                  </th>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Correct Answers
                  </th>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Date of Submit
                  </th>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Score
                  </th>
                </tr>
              </thead>

              <tbody class="bg-white">
                {currentTest?.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td class="py-3 px-2 whitespace-no-wrap border-b border-gray-200 ">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img
                              class="w-10 h-10 rounded-full"
                              src={e?.userImage}
                              alt="user"
                            />
                          </div>

                          <div class="ml-4">
                            <div class="text-sm font-medium leading-5 text-gray-900">
                              {e?.userName}
                            </div>
                            <div class="text-sm leading-5 text-gray-500">
                              {e?.userEmail}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td class="py-3 px-2 whitespace-no-wrap border-b border-gray-200 text-center">
                        <div class="text-sm leading-5 text-gray-900">
                          {e?.totalQuestions}
                        </div>
                      </td>

                      <td class="py-3 px-2 whitespace-no-wrap border-b border-gray-200 text-center">
                        {e?.attemptedQuestions}
                      </td>

                      <td class="py-3 px-2 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200 text-center">
                        {e?.correctAnswer}
                      </td>
                      <td class="py-3 px-2 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200 text-center">
                        {/* {e?.dateOfSubmit} */}
                      </td>

                      <td class="py-3 px-2 text-sm font-medium leading-5  whitespace-no-wrap border-b border-gray-200 text-center">
                        {e?.scoreObtained}
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
  );
};

export default LatestAttemptTab;
