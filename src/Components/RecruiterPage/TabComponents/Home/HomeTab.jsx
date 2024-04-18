import React, { useEffect,useState } from "react";
import "./HomeTabStyles.scss";
import { selectTest } from "../../../../helper/mainData";
import Loader from "../../../Loader/Loader";

const HomeTab = () => {
  const [open, setOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedTest, setSelectedTest] = useState(null);

  const handleCardClick = (index, test) => {
    setActiveIndex(index);
    setSelectedTest(test);
  };
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  })
  const handleCreateTest = ()=>{
    setActiveIndex(null)
  }

  return (
    <>
    
   {  open ? (
          <Loader />
        ) : <div className="py-3 px-5">
      <div className="select-test flex justify-center gap-10 py-5">
        {
          selectTest?.map((test,i)=>{
            return(
              <div           className={`card shadow-lg cursor-pointer bg-indigo-50 ${activeIndex === i ? 'border-blue-800 border-2' : ''}`}

               key={i}
               onClick={() => handleCardClick(i, test)}
               >
              <div class="card-image"><img src={test.image} alt="" className=" w-full max-h-48"/></div>
              <div class="category text-center font-xl font-semibold py-5"> {test?.type} </div>
            </div>
            )

          })
        }
       
      </div>
      <div className="flex justify-end">
      <button className="bg-[#1e3a8a] text-white px-5 py-2 rounded-md"
      onClick={handleCreateTest}

      >Create Test</button>
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
                        <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div
                                class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                                <table class="min-w-full">
                                    <thead>
                                        <tr>
                                            <th
                                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                Author</th>
                                            <th
                                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                Test Name</th>
                                            <th
                                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                Status</th>
                                            <th
                                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                Created Date</th>
                                            <th
                                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                Action</th>
                                          
                                        </tr>
                                    </thead>
    
                                    <tbody class="bg-white">
                                      
                                       
                                     
                                        <tr>
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex items-center">
                                                    <div class="flex-shrink-0 w-10 h-10">
                                                        <img class="w-10 h-10 rounded-full"
                                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                                            alt=""/>
                                                    </div>
    
                                                    <div class="ml-4">
                                                        <div class="text-sm font-medium leading-5 text-gray-900">John Doe
                                                        </div>
                                                        <div class="text-sm leading-5 text-gray-500">john@example.com</div>
                                                    </div>
                                                </div>
                                            </td>
    
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="text-sm leading-5 text-gray-900">Quantitative Aptitude Test</div>
                                               
                                            </td>
    
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <span
                                                    class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                                            </td>
    
                                            <td
                                                class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                April-14</td>
    
                                            <td
                                                class="px-6 py-4 text-sm font-medium leading-5  whitespace-no-wrap border-b border-gray-200">
                                                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                            </td>
                                        </tr>
                                   
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

      </div>
    </div>}
    </>
  );
};

export default HomeTab;
