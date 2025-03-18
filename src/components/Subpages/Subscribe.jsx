import React from "react";
import { FaRegBell } from "react-icons/fa6";
const Subscribe = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-[22px] font-[550] max-[960px]:text-[18px] text-center mt-[30px] ">
          Subscribe now and earn 500 points!!
        </h1>
      </div>
      <div className="border-1 border-[#000] w-[700px] mt-[20px] max-[960px]:w-[350px] h-[50px] m-auto max-md:mt-[10px] flex justify-between items-center px-4 rounded-[25px] bg-[linear-gradient(90deg,#fff_90%,#000_10%)] max-md:bg-[linear-gradient(90deg,#fff_85%,#000_15%)]">
        <input
          className="outline-0  py-1.5 w-[100%]"
          type="text"
          placeholder="Enter your email"
        />
        <FaRegBell className="text-[30px] text-[#fff] cursor-pointer" />
      </div>
    </div>
  );
};

export default Subscribe;
