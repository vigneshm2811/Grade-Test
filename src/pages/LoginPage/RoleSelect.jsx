import React, { useState } from 'react'
import userIcon from "../../assets/icons/user.png"
import Recruiter from "../../assets/icons/office-worker.png"

const RoleSelect = ({handleOptionToggle}) => {
    const [selectedOption, setSelectedOption] = useState("user");

  // Function to handle radio button change
  const handleOptionsToggle = (option) => {
    setSelectedOption(option);  
    handleOptionToggle(option)
  };
  return (
    <>
     <div className="radio-inputs">
            <label>
              <input className="radio-input" type="radio" name="engine" 
               checked={selectedOption === "user"}
               onChange={() => handleOptionsToggle("user")}
               autoComplete="off"
              />
              <span className="radio-tile">
                <img src={userIcon} alt="user" className="w-8 h-8"/>
                <span className="radio-label">User Login</span>
              </span>
            </label>
            <label>
              <input
        
                className="radio-input"
                type="radio"
                name="engine"
                checked={selectedOption === "recruiter"}
                onChange={() => handleOptionsToggle("recruiter")}
                autoComplete="off"
              />
              <span className="radio-tile">
             <img src={Recruiter} alt="" className="w-10 h-10"/>
                <span className="radio-label">Recruiter</span>
              </span>
            </label>
          </div>
      
    </>
  )
}

export default RoleSelect
