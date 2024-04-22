import React,{useState,useEffect} from "react";
import { TestTypeData } from "../../helper/mainData";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectQuestionType } from "../../Features/TestType/TestTypeSlice";
import Loader from "../Loader/Loader";

const CandidateHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);


  const handelSelect = (type) => {
    navigate("/user/test");
    dispatch(selectQuestionType(type));
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  })

  return (
    <>
    {
      open ?(<Loader/>):(
        <div className="lg:px-60 px-10  md:px-20 py-8">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="font-semibold text-3xl">Different Test Types</h1>
          <p className="py-1 text-light text-gray-500">
            Combine these tests into a single assessment based on the role.
            Then, share the assessment with your candidates.
          </p>
        </div>

        <div className="test-type grid md:grid-cols-2 gap-10">
          {TestTypeData.map((e) => {
            return (
              <div
                className="group p-4 cursor-pointer bg-gray-100 rounded  grid md:grid-cols-6 items-center gap-4 border-2 border-transparent hover:border-gray-200 "
                key={e.id}
                onClick={() => handelSelect(e.type)}>
                <div className="col-span-3  ">
                  <img
                    src={e.image}
                    alt=""
                    class="rounded w-full h-full lg:w-10/12  object-left-top object-cover mx-auto"
                  />
                </div>
                <div className="col-span-3">
                  <h1 className="text-lg font-semibold leading-6 text-gray-900">
                    {e.type}
                  </h1>
                  <p className="text-gray-500 py-2">{e.description}</p>

                  <p className="text-green-600 cursor-pointer">
                    Try Now <KeyboardArrowRightIcon />{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
      )


    }
    
    
    </>
  );
};

export default CandidateHome;
