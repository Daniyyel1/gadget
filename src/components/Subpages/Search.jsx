import React from 'react'

const Search = ({onChange}) => {
    
    const handleChange = (e) => {
        onChange(e.target.value);
      };

  return (
    <div>
         <div className='max-md:px-2'>
          <input
            className="outline-none border-2 border-[#eae5dd] w-[210px] h-[40px] px-2 bg-[#eae5dd] capitalize"
            type="text"
            placeholder="search"
             onChange={handleChange}
          />
          {/* <Search onChange={handleSearchChange} /> */}
          <button className="border-2 border-[#372f28] bg-[#372f28] text-[#fff] h-[40px] w-[80px] cursor-pointer capitalize">
            shoot
          </button>
           </div>
    </div>
  )
}

export default Search