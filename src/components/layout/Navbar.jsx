import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { RiShoppingBag2Line } from "react-icons/ri";
import { NavWrapper } from "../Pages/style";
import { SearchContext } from "../../Context";
import Discover from "../Subpages/Discover";
import Search from "../Subpages/Search";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  // const {handleSearchChange} = useContext(SearchContext)
  const isSearch = () => {
    setSearch(!search);
  };

  const [open, setOpen] = useState(false);

  const checkIsOpen = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(!open);
  };

  return (
    <NavWrapper>
      <div className="bg-[linear-gradient(90deg,#eae5dd_78%,#372f28_22%)] py-5 h-[15vh] max-md:h-[12vh] max-md:bg-[linear-gradient(90deg,#eae5dd_72%,#372f28_28%)] px-2">
        <div className="flex flex-row justify-between max-w-[1100px] m-auto py-[10px] border-t-[#372f28] border-b-[#372f28] border-[1px] border-l-0 border-r-0">
          <div className="navRight flex flex-row items-center space-x-20 max-md:space-x-2 ">
            <div className="hamburger hidden" onClick={checkIsOpen}>
              <div className={`bar ${open ? "slide" : ""}`}></div>
              <div className={`bar ${open ? "slide" : ""}`}></div>
              <div className={`bar ${open ? "slide" : ""}`}></div>
            </div>
            <h1 className=" text-[#372f28] text-[27px] capitalize font-[550] max-[960px]:text-[15px] max-md:w-[150px] ">
              datacomm xpress
            </h1>
            <div
              className={`navLinks flex flex-row items-center space-x-5 capitalize text-[#372f28] font-[550] group text-[14px] ${
                open ? "show" : ""
              }`}
            >
              <Link onClick={closeMenu} className="" to="/">
                home
              </Link>
              <Link onClick={closeMenu} to="/product">
                products
              </Link>
              <Link onClick={closeMenu} to="/brand">
                brands
              </Link>
              <Link onClick={closeMenu} to="/contact">
                contact
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-10 max-[960px]:space-x-3 text-[#372f28] cursor-pointer">
            <div className="relative group">
              <IoSearch className="size-6" onClick={isSearch} />
              <h1 className="hidden rounded-[2px] text-[13px] text-[#fff] bg-[#372f28] text-center border-[2px] border-[#372f28] w-[70px] h-[40px] absolute group-hover:block top-[30px] left-[-15px] py-[5px] capitalize">
                search
              </h1>
            </div>
            <div className="relative group">
              <GoPerson className="size-6 max-md:text-[#eae5dd]" />
              <h1 className="hidden rounded-[2px] text-[13px] text-[#fff] bg-[#372f28] text-center border-[2px] border-[#372f28] w-[70px] h-[40px] absolute group-hover:block top-[30px] left-[-24px] py-[5px] capitalize">
                profile
              </h1>
            </div>
            <Link
              to="/cartpage"
              className="flex flex-row items-center relative group"
            >
              <RiShoppingBag2Line className="size-6 max-md:text-[#eae5dd]" />
              <h1 className="hidden rounded-[2px] text-[13px] text-[#fff] bg-[#372f28] text-center border-[2px] border-[#372f28] w-[70px] h-[40px] absolute group-hover:block top-[30px] left-[-20px] py-[5px] capitalize">
                cart
              </h1>
              <h1 className="font-[650] text-[13px] max-md:text-[#eae5dd] ">
                ₦0.00
              </h1>
              <span className="flex justify-center items-center border-[2px] border-[#372f28] h-[20px] w-[20px] rounded-[50%] text-[13px] text-[#fff] bg-[#372f28] absolute top-[12px] left-[4px]">
                0
              </span>
            </Link>
          </div>
          <div
            className={`navButton flex flex-row items-center space-x-2.5 ${
              open ? "showButton" : ""
            }`}
          >
            <button className="border-1 border-[#fff] w-[70px] h-[30px] text-[#fff] capitalize text-[13px] rounded-[4px]">
              login
            </button>
            <button className="border-1 border-[#fff] w-[90px] h-[30px] text-[#fff] capitalize text-[13px] rounded-[4px]">
              sign up
            </button>
          </div>
        </div>
        <div
          className={`searchInput w-[342px] h-[70px] rounded-[5px] max-md:right-1 absolute right-[156px] bg-[#fff] ${
            search ? "open" : ""
          }`}
        >
          <Search />

          {/* <input
            className="outline-none border-2 border-[#eae5dd] w-[210px] h-[40px] p-2 bg-[#eae5dd] capitalize"
            type="text"
            placeholder="search"
          /> */}
          {/* //  <Search onChange={handleSearchChange} /> */}
          {/* <button className="border-2 border-[#372f28] bg-[#372f28] text-[#fff] h-[40px] w-[80px] cursor-pointer capitalize">
            shoot
          </button>  */}
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navbar;
