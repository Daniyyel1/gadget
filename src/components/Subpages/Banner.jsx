import React, { useEffect, useState } from "react";
import smile from "../../assets/smile.png";
import { BannerWrapper } from "../Pages/style";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  const [display, setDisplay] = useState(false);

  const isDisplay = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    Aos.init({ duration: 500, easing: "linear" });
  }, []);

  return (
    <BannerWrapper>
      <div className=" banner  h-[100%] py-[70px] relative">
        <div className="max-w-[1100px] h-[100%] m-auto">
          <div className="border-[2px] border-[gray] w-[170px] max-md:h-[60px] max-sm:w-[150px] h-[80px] flex justify-center items-center absolute right-[180px] bottom-[50px] max-md:right-[0] max-md:bottom-0">
              <div className="info w-[157px] h-[70px] max-md:h-[50px] max-md:w-[142px] bg-[#372f28] transition-all duration-300">
                <h1 className="text-[#fff] text-[25px] text-center">Hello!</h1>
                <img src={smile} alt="smile" />
              </div>
  
              
          </div>

          <div data-aos="fade-right"  className="text-[#fff]">
             <div className="mt-[120px] max-md:mt-[60px]  flex flex-row max-md:flex-col-reverse items-center max-md:center space-x-15 max-md:space-x-6">
               <h1 className="text-[70px] capitalize max-md:text-[50px] font-[550]">datacomm</h1>
               <p className="text-[14px] capitalize w-[240px] text-[#372f28] max-md:text-[black]">authetic gadgets for superior performance and longetivity.</p>
             </div>
             <h1 className="text-[80px] max-md:text-[70px]  max-md:w-[300px] max-md:m-auto capitalize font-[550]">xpress</h1>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
