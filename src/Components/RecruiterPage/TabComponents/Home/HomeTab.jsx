import React, { useEffect,useState } from "react";
import "./HomeTabStyles.scss";
import { selectTest } from "../../../../helper/mainData";
import Loader from "../../../Loader/Loader";

const HomeTab = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  })
  

  return (
    <>
    
   {  open ? (
          <Loader />
        ) : <div className="py-8 px-5">
      <div className=" flex justify-center gap-10">
        {
          selectTest?.map((test,i)=>{
            return(
              <div class="card shadow-lg cursor-pointer bg-indigo-50" key={i}>
              <div class="card-image"><img src={test.image} alt="" className=" w-full max-h-48"/></div>
              <div class="category text-center font-xl font-semibold py-5"> {test?.type} </div>
              {/* <div class="heading">{test.description}</div> */}
            </div>
            )

          })
        }
       
      </div>
    </div>}
    </>
  );
};

export default HomeTab;
