import {  useState } from "react";
import Style from './dropdown.module.css';

function Dropdown() {

  const list = ["Yes", "May be",  "Probably No",, "Never", "Always"];

  const [selectedOption, setSelectedOption] = useState("");

  const [optionArray, setOptionArray] = useState([]);
  
  const handleMouseOver = ()=>{
    setOptionArray(list);
  }
 
  const handleClick = ()=>{
    setOptionArray([]);
  }
  
  const handleOptionClick = (data)=>{
    setSelectedOption(data);
  }


  return (
    <>
      <div onClick={handleClick}>
        <h1>Q. Are we going to use this Dropdown?</h1>
        <div>
          <h2>Ans : {selectedOption}</h2>
          <div onMouseOver={handleMouseOver} className={Style.initialOption}>Select</div>
          <div className={Style.options}>
              {optionArray.map((data)=> (
                  <div onClick={() => handleOptionClick(data)} className={Style.singleOption}>{data}</div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;