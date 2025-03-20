import React from "react";
import { Link } from "react-router-dom";

const GadgetsDetails = ({ item }) => {

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }; 

  return (
    <div className="">
      <div className="change h-[310px] bg-[linear-gradient(180deg,#372f28_50%,#fff_50%)] rounded-[7px]">
        <div className="img flex justify-center items-center py-[10px] max-md:py-[5px]">
          <img
            className="h-[200px] w-[230px] object-contain"
            src={item.images[0]}
            alt="image"
          />
        </div>

        <div className="px-[13px] max-md:px-[10px]">
          <h1 className="text-[13px] max-md:text-[13px] max-md:w-[155px] font-[550]">{truncateText(item.name, 28)}</h1>
          <div className="flex justify-between items-center max-md:flex-col max-md:items-start">
            <h2 className="font-[550] max-md:text-[15px]">₦ {item.price}</h2>
            <Link
              to={`/gadgetPage/${item.id}`}
              className="text-[12px] max-md:text-[13px] capitalize text-[#372f28] font-[550] cursor-pointer"
            >
              read more & cart?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetsDetails;
