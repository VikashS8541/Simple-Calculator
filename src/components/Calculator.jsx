import React, { useState } from 'react';
import {buttonData} from "./AllButton.js";

const Calculator = () => {

// state to click the number and get the value of the number

const [inputValue , setInputValue ] = useState("");


// Function for all task

const handleCal = (value) =>{
   if(value === "AC"){
    setInputValue("");
   }
   else if (value === "⌫"){
    setInputValue((prev)=> prev.slice(0 , -1));
   }
   else if (value === "=") {
      try{
        const represent = inputValue.replace(/x/g , "*").replace(/%/g,"/100");
        setInputValue(eval(represent));
      }catch{
        setInputValue("Error");
      }
   }
   else{
    setInputValue((prev) => prev + value);
   }
}



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-3xl shadow-2xl p-6 w-full max-w-xs border border-gray-700">
        {/* Display Screen */}
        <div className="bg-gray-900 rounded-2xl p-5 mb-6 border border-gray-700">
          <div className="text-white text-right text-4xl font-light h-12 overflow-x-auto whitespace-nowrap scrollbar-hide">{inputValue || "0"}</div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-4 gap-4">
          {buttonData.map((item,idx)=>(
              <button onClick={()=> handleCal(item.label)} key={idx} value={item.label} className={`${item.bg} hover:${item.hover} ${item.col || " "} text-white rounded-lg h-16 text-xl font-medium transition-colors`}>{item.label}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
