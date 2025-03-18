import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

const FooterContainer = () => {
  return (
    <div className="max-w-[1100px] m-auto h-[100%] mt-7">
      <div className=" flex gap-[6rem] max-md:px-4 max-md:gap-[2rem] py-[40px] max-md:py-[20px] max-md:flex-col text-[#fff]">
        <div>
          <h1 className="text-[25px] font-[600] uppercase text-[#ded7c4]">
            datacomm xpress
          </h1>
          <div className="mt-[15px] flex max-md:flex-col max-md:items-start justify-center items-center gap-[15px]">
            <input
              className="outline-none p-[10px] border-[1px] w-[250px] h-[40px]"
              type="text"
              placeholder="Enter your email address"
            />
            <button className=" bg-[#fff] text-[#000] h-[40px] rounded-[2px] w-[120px] text-[13px] capitalize font-[550] cursor-pointer">
              join free
            </button>
          </div>
          <div className="icon flex items-center gap-[20px] mt-[29px] max-md:flex-col max-md:mt-[15px] max-md:gap-[10px] max-md:items-start">
            <span>
              <FaXTwitter />
            </span>
            <span>
              <FiInstagram />
            </span>
            <span>
              <FaWhatsapp />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center max-md:flex-col max-md:items-start  max-md:gap-[1rem] gap-[8rem] mt-[8px]">
          <div>
            <h1 className="uppercase text-[15px] font-[550]">contact</h1>
            <ul className=" links py-[10px]">
              <li className="text-[15px] capitalize">about us</li>
              <li className="text-[15px] capitalize">career</li>
              <li className="text-[15px] capitalize">blog</li>
              <li className="text-[15px] capitalize">media</li>
            </ul>
          </div>
          <div>
            <h1 className="uppercase text-[15px] font-[550]">quick links</h1>
            <ul className=" links py-[10px]">
              <li className="text-[15px] capitalize">about us</li>
              <li className="text-[15px] capitalize">career</li>
              <li className="text-[15px] capitalize">blog</li>
              <li className="text-[15px] capitalize">media</li>
            </ul>
          </div>
          <div>
            <h1 className="uppercase text-[15px] font-[550]">legal links</h1>
            <ul className="links py-[10px]">
              <li className="text-[13px] capitalize">about us</li>
              <li className="text-[15px] capitalize">career</li>
              <li className="text-[15px] capitalize">blog</li>
              <li className="text-[15px] capitalize">media</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h1 className="uppercase text-[100px] max-[960px]:text-[30px] max-[960px]:center max-md:m-auto max-md:w-[350px] w-[100%] text-[#ded7c4] font-[600] opacity-45">
          datacomm xpress
        </h1>
      </div>
    </div>
  );
};

export default FooterContainer;
