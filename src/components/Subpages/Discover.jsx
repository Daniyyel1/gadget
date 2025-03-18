import React, { useEffect } from 'react'
import { DiscoverWrapper } from '../Pages/style'
import { GoArrowUpRight } from "react-icons/go";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';


const Discover = ({item}) => {

    useEffect(() => {
        Aos.init({ duration: 500, easing: "linear" });
      }, []);

  return (
    <DiscoverWrapper>
          <div data-aos="fade-down" className=' h-[400px]  max-md:h-[270px] max-md:w-[178px] w-[270px] mt-[40px] max-md:m-auto bg-[linear-gradient(180deg,#372f28_50%,#eae5dd_50%)] rounded-[5px] px-[10px] max-md:px-1.5 py-[10px] border-2'>
             <div className='flex items-center justify-between text-[#fff] capitalize'>
                <p className='w-[40px] uppercase text-[13px]'>{item.discover}</p>
                 <span className='border-[1px] border-[#fff] h-[30px] w-[30px] rounded-[50%] flex items-center justify-center'><GoArrowUpRight /></span>
             </div>
              <div className='flex items-center justify-center'>
                <img className='w-[260px] h-[290px] object-contain max-md:h-[150px] max-md:w-[150px] max-md:object-center' src={item.img} alt='gadget' />
              </div>
               <div className='flex items-center justify-between'>
                <h1 className='text-[15px] max-[960px]:text-[13px] uppercase text-[#372f28] font-[800] w-[120px] max-md:w-[100px]'>{item.name}</h1>
                <button className='font-[800] cursor-pointer'>
                    {item.price}
                </button>
               </div>
        
          </div>
    </DiscoverWrapper>
  )
}

export default Discover