import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Items } from "../Data";
import { FaRegHeart } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import all from "../../assets/all.png";
import heartt from "../../assets/heartt.png";
import { Gadget } from "../../Gadget";
import { BsCartDash } from "react-icons/bs";
import { FewGadgets } from "./fewGadget";

const GadgetPage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [heart, setHeart] = useState(false);

  const check = () => {
    setHeart(!heart);
  };

  const params = useParams();

  const gadget = Items[1].gadgetItems?.find((gd) => gd.id == params.id);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="bg-[#eae5dd] relative">
      <div className="max-w-[1100px] m-auto h-[100%] py-[40px]">
        <div className="flex flex-row max-md:flex-col-reverse max-md:px-2  gap-5">
          <div className="h-[400px] max-md:h-[200px] max-md:w-[300px]  w-[600px] bg-[gray] rounded-[10px]">
            <img
              className="h-[100%] w-[100%]"
              src={gadget.images[1]}
              alt="images"
            />
            <Carousel
              responsive={responsive}
              className=" carousel mt-[20px] max-md:w-[250px] rounded-[5px] bg-[lightgray] "
            >
              <div className=" card h-[200px]">
                <div className="h flex justify-center items-center">
                  <img
                    className="h-[200px] w-[200px] object-cover rounded-[10px] "
                    src={gadget.images[0]}
                    alt="gadget"
                  />
                </div>
              </div>
              <div className=" card h-[200px] max-md:w-[200px] ">
                <div className="h flex justify-center items-center">
                  <img
                    className="h-[200px] w-[200px]  object-cover "
                    src={gadget.images[0]}
                    alt="gadget"
                  />
                </div>
              </div>
              <div className=" card h-[200px]  ">
                <div className="h flex justify-center items-center">
                  <img
                    className="h-[200px] w-[200px] object-cover "
                    src={gadget.images[1]}
                    alt="gadget"
                  />
                </div>
              </div>
              <div className="card h-[200px]  ">
                <div className="h flex justify-center items-center">
                  <img
                    className="h-[200px] w-[200px] object-cover "
                    src={gadget.images[0]}
                    alt="gadget"
                  />
                </div>
              </div>
              <div className="card h-[200px]  ">
                <div className="h flex justify-center items-center">
                  <img
                    className="h-[200px] w-[200px] object-cover "
                    src={gadget.images[0]}
                    alt="gadget"
                  />
                </div>
              </div>
            </Carousel>
          </div>
          <div>
            <h1 className="text-[28px] max-md:text-[20px] max-md:w-[290px] font-[550] w-[420px]">{gadget.name}</h1>
            <div className="flex items-center gap-1.5 mt-[10px]">
              <span className="text-[26px]">₦</span>
              <h3 className="text-[26px] font-[550]">{gadget.price}</h3>
            </div>
            <div className="flex items-center gap-1.5 py-[20px]">
              <p>Qty</p>
              <div className=" px-[5px] bg-[lightgrey] flex justify-between items-center  h-[40px] w-[170px]">
                <span className="text-[20px] cursor-pointer">-</span>
                <p className="text-[19px]">{gadget.cartQuantity}</p>
                <span className="text-[20px] cursor-pointer">+</span>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-[20px] font-[550]">Ratings:</h2>
              </div>
              <div>
                <h2 className="text-[20px] font-[550]">Reviews:</h2>
              </div>
              <div className="flex items-center gap-6">
                <h2 className="text-[20px] font-[550]">Quantity Left:</h2>
                <p>{gadget.quantity}</p>
              </div>
            </div>
            <div className="flex items-center gap-3.5 mt-[20px]">
              <button className="border-1 h-[40px] w-[150px] cursor-pointer capitalize rounded-[20px]">
                add to cart
              </button>
              <button className="h-[40px] w-[150px] border-1 cursor-pointer rounded-[20px] capitalize bg-[#000] text-[#fff]">
                buy now
              </button>
            </div>
            <div className="absolute right-10 top-40 max-md:right-2">
              {heart ? (
                <div className="flex items-center">
                  <h1 className="text-[18px] text-[green] capitalize transition-all duration-300">
                    you like this item!
                  </h1>
                  <img
                    onClick={check}
                    className="h-[70px] w-[70px] absolute left-[68px] top-[-127px] max-md:left-[90px]"
                    src={heartt}
                    alt="heart"
                  />
                </div>
              ) : (
                <h1 className="text-[22px] capitalize transition-all duration-300"></h1>
              )}
            </div>
          </div>
          <FaRegHeart
            onClick={check}
            className={`text-[50px] max-md:absolute max-md:right-[20px] max-md:top-[40px] ${heart ? "opacity-0" : ""}`}
          />
        </div>
        <div className="mt-[220px] max-md:px-2">
          <h2 className="text-[20px] font-[550]">Categories</h2>
          <ul className="text-[14px]">
            <li>{gadget.categories[0]}</li>
            <li>{gadget.categories[1]}</li>
            <li>{gadget.categories[2]}</li>
          </ul>
          <h3 className="text-[20px] font-[550]">Specifications</h3>
          <div className="border-1 border-[gray] h-[100%] w-[400px] max-md:w-[100%] py-3 mt-[10px]">
            <h1 className=" border-1 border-b-[gray] px-4 border-t-0 border-l-0 border-r-0 h-10">
              Key Features
            </h1>
            {gadget.specification.map((item) => (
              <div className=" m-0 p-0">
                <li className="list">
                  {item.key}: <p> {item.value}</p>
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-14 bg-[#fff] max-md:py-7">
        <h1 className="capitalize font-[550] text-[30px] py-3 px-4">
          products you may also like:
        </h1>
        <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          responsive={responsive}
          className="max-w-[1200px]  "
        >
          {Items[1].gadgetItems.map((item) => (
            <div>
              <div className="card h-[340px] rounded-[10px] border-1  bg-[#fff] py-3">
                <div className="img h-[230px] w-[250px] m-auto  bg-[lightgray] rounded-[10px] ">
                  <img
                    src={item.images[0]}
                    alt="images"
                    className=" h-[100%] w-[100%]"
                  />
                </div>
                <p className="px-2.5 mt-2.5">{truncateText(item.name, 24)}</p>
                <div className="flex justify-between items-center px-3 mt-1.5 ">
                  <h1 className="font-[550]">₦ {item.price} </h1>
                  <div className=" cart border-1 border-[#000] h-[40px] w-[60px] flex justify-center items-center bg-[#000] text-[#fff]">
                    <Link to={`/gadgetPage/${item.id}`}>
                      <BsCartDash className="text-[20px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default GadgetPage;
