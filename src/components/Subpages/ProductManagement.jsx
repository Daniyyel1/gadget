import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiX } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";

const ProductManagement = () => {
  const [close, setClose] = useState(false);

  const checkClose = () => {
    setClose(!close);
  };

  return (
    <div className="h-[100%] max-md:h-[100%] bg-[rgb(0,0,0)]">
      <div className=" py-3 relative">
        <div className="max-w-[1000px] mt-8  m-auto h-[100%]  border-1 border-[gray] px-3 py-1.5">
          <div className="text-[#fff] flex justify-between items-center py-3">
            <h1 className="text-[20px] max-md:text-[15px] font-[550] capitalize">
              product management
            </h1>
             {
            
               close ? ('') : (<button onClick={checkClose} className="text-[13px] h-[40px] w-[120px] bg-[#372f28] rounded-[4px] cursor-pointer">Add Product</button>)
                
             }
          </div>
           <div className="table">
          <thead>
          <tr className="move">
            <th>name</th>
            <th>description</th>
            <th>price</th>
            <th>discount</th>
            <th>category</th>
            <th>inventory</th>
            <th>actions</th>
          </tr>
          </thead>
           <tbody>
          <tr className="move">
            <td data-label='name'>jjjff</td>
            <td data-label='description'>jjjjk</td>
            <td data-label='price'>jrjrkrkkk</td>
            <td data-label='discount'>jrrbbcbbcbnj</td>
            <td data-label='category'>jrkbcbcbcr</td>
            <td data-label='inventory'>jrrk</td>
             <div className="last">
            <td className="action" data-label= 'actions'>
              <FiEdit className="text-[17px]" />
              <RiDeleteBinLine className="text-[red] text-[20px]" />
              </td>
              </div>
          </tr>
          <tr className="move">
            <td data-label='name'>jjjff</td>
            <td data-label='description'>jjjjk</td>
            <td data-label='price'>jrjrkrkkk</td>
            <td data-label='discount'>jrrbbcbbcbnj</td>
            <td data-label='category'>jrkbcbcbcr</td>
            <td data-label='inventory'>jrrk</td>
             <div className="last">
            <td className="action" data-label= 'actions'>
              <FiEdit className="text-[17px]" />
              <RiDeleteBinLine className="text-[red] text-[20px]" />
              </td>
              </div>
          </tr>
          <tr className="move">
            <td data-label='name'>jjjff</td>
            <td data-label='description'>jjjjk</td>
            <td data-label='price'>jrjrkrkkk</td>
            <td data-label='discount'>jrrbbcbbcbnj</td>
            <td data-label='category'>jrkbcbcbcr</td>
            <td data-label='inventory'>jrrk</td>
             <div className="last">
            <td className="action" data-label= 'actions'>
              <FiEdit className="text-[17px]" />
              <RiDeleteBinLine className="text-[red] text-[20px]" />
              </td>
              </div>
          </tr>
          <tr className="move">
            <td data-label='name'>jjjff</td>
            <td data-label='description'>jjjjk</td>
            <td data-label='price'>jrjrkrkkk</td>
            <td data-label='discount'>jrrbbcbbcbnj</td>
            <td data-label='category'>jrkbcbcbcr</td>
            <td data-label='inventory'>jrrk</td>
             <div className="last">
            <td className="action" data-label= 'actions'>
              <FiEdit className="text-[17px]" />
              <RiDeleteBinLine className="text-[red] text-[20px]" />
              </td>
              </div>
          </tr>
          <tr className="move">
            <td data-label='name'>jjjff</td>
            <td data-label='description'>jjjjk</td>
            <td data-label='price'>jrjrkrkkk</td>
            <td data-label='discount'>jrrbbcbbcbnj</td>
            <td data-label='category'>jrkbcbcbcr</td>
            <td data-label='inventory'>jrrk</td>
             <div className="last">
            <td className="action" data-label= 'actions'>
              <FiEdit className="text-[17px]" />
              <RiDeleteBinLine className="text-[red] text-[20px]" />
              </td>
              </div>
          </tr>
        
         
          </tbody>
          </div>
        </div>
         
        <div>
          <div
            className={` h-[144vh] w-[450px] left-[-100%] max-md:ml-1.5  transition-all duration-300 absolute max-md:w-[350px] bg-[#152238] top-0 m-auto mt-10 rounded-[10px] ${
              close ? "left-[33%] max-md:left-[0] transition-all duration-300" : ""
            }`}
          >
            <div className="flex justify-between items-center py-2.5 px-3 text-[#fff]">
              <h1 className="capitalize text-[14px] font-[550]">
                add new product
              </h1>
              <div className="hover:border-1 border-[gray] hover:bg-[gray] h-[20px] w-[20px] rounded-[50%] flex justify-center items-center">
              <FiX className=" text-[14px]" onClick={checkClose} />
              </div>
            </div>
            <div className="px-3 text-[#fff]">
              <form>
                <label className="text-[12px]">Name</label>
                <br></br>
                <input
                  className="mt-[5px] border-1 border-[green] px-2 bg-[#000] outline-0 w-[100%] h-[40px]"
                  type="text"
                />
                <br></br>
                <br></br>
                <label className="text-[12px]">Description</label>
                <br></br>
                <textarea
                  className="bg-[#000] max-md:w-[100%] resize-none outline-0 px-2 mt-[5px] rounded-[5px]"
                  rows={4}
                  cols={51}
                />
                <br></br>
                <br></br>
                <div className="flex items-center gap-4 max-md:gap-2 ">
                  <div>
                    <label className="text-[12px]" for="options">
                      Manufacturer Name
                    </label>
                    <br></br>
                    <select
                      className="bg-[#000] outline-0 h-[40px] text-[13px] border-1 border-[green] rounded-[4px]  w-[200px] max-md:w-[170px] mt-[5px]"
                      id="options"
                      name="options"
                    >
                      <option value="" disabled selected>
                        Select Manufacturer Name
                      </option>
                      <option value="cisco">cisco</option>
                      <option value="mk">mk products</option>
                    </select>
                  </div>
                  <div className="">
                    <label className="text-[12px]" for="options">
                      Warranty
                    </label>
                    <br></br>
                    <input
                      className="outline-0 border-1 border-[green] h-[40px] mt-[5px] max-md:w-[150px] rounded-[4px] bg-[#000] px-1.5 max-md:px-0.5"
                      type="text"
                    />
                  </div>
                </div>
                <br></br>
                <label className="text-[12px]" for="specification">
                  Specification
                </label>
                <div className="flex items-center gap-4 max-md:gap-2">
                  <input
                    className="border-1 border-[green] bg-[#000] h-[40px] outline-0 rounded-[4px] w-[200px] max-md:w-[170px] mt-[5px] px-1.5"
                    type="text"
                    placeholder="Key"
                  />
                  <input
                    className="border-1 border-[green] h-[40px] bg-[#000] outline-0 rounded-[4px] max-md:w-[150px] mt-[5px] px-1.5 "
                    type="text"
                    placeholder="Value"
                  />
                </div>
                <button className=" h-[40px] w-[100%] rounded-[5px] font-[550] text-[13px] mt-3 capitalize cursor-pointer bg-[#372f28]">
                  add specification
                </button>
                <label for="file-upload" className="text-[12px]">
                  Product Images (Max 3)
                </label>
                <br></br>
                <div className="border-[1px] border-[gray] h-[50px] w-[50px] py-4 px-4">
                  <BiImageAdd className="text-[#fff]" />
                  <input
                    for="file-upload"
                    className="h-[50px] w-[50px] border-1"
                    type="file"
                  />
                </div>
                <br></br>
                <div className="flex  items-center justify-between gap-4">
                  <div>
                    <label className="text-[12px]">Price</label>
                    <br></br>
                    <input
                      className="border-1 mt-[5px] border-[green] px-1.5 w-[200px] h-[40px] bg-[#000] outline-0"
                      type="number"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] ">Category:</label>
                    <br></br>
                    <div className="flex  items-center gap-2.5">
                      <label className="text-[11px]">Networking:</label>
                      <input type="checkbox" name="sex" />
                      <br></br>
                    </div>
                    <div className="flex  items-center gap-2.5">
                      <label className="text-[11px]">Wired Network:</label>
                      <input type="checkbox" name="sex" />
                      <br></br>
                    </div>
                    <div className="flex  items-center gap-2.5">
                      <label className="text-[11px]">Switches:</label>
                      <input type="checkbox" name="sex" />
                    </div>
                  </div>
                </div>
                <br></br>
                <div className="flex items-center gap-4 max-md:gap-2">
                  <div>
                    <label className="text-[12px]">Inventory</label>
                    <br />
                    <input
                      className="border-1 border-[green] w-[200px] max-md:w-[170px] h-[40px] px-1.5"
                      type="number"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="text-[12px]">Inventory</label>
                    <br />
                    <input
                      className="border-1 border-[green] h-[40px] max-md:w-[150px] px-1.5"
                      type="number"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="absolute right-0 px-3 mt-3 flex items-center gap-2">
                    <button className=" border-[gray] bg-[#372f28] w-[70px] rounded-[4px] h-[30px] text-[11px] cursor-pointer">Cancel</button>
                    <button className="border-1 border-[green] w-[120px] h-[30px] text-[11px] rounded-[4px] bg-[#009c6e] cursor-pointer">Save Product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
