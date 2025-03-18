import React, { useContext } from 'react'
import { Items } from '../Data'
import GadgetsDetails from '../Subpages/GadgetsDetails'
import { SearchContext } from '../../Context'
import Search from '../Subpages/Search'

const Products = () => {
    const {filteredGadgets, handleSearchChange} = useContext(SearchContext)
    //  const food = data.map((fd)=>fd.name === params.name)
  return (
    <div className='bg-[#fff] h-[180vh] max-md:h-[100%]'>
    <div className='max-w-[1100px] m-auto'>
      {/* {
        Items[1].gadgetItems?.map((gadgetItem)=>{
          return <GadgetsDetails item={gadgetItem} key={gadgetItem} />
        })
      } */}
        <div className='py-[10px]'>
        <Search onChange={handleSearchChange} className='game' />
        </div>
         <div className='grid grid-cols-4 gap-4 max-md:gap-2 max-md:px-2  mt-[30px] max-md:grid-cols-2'>
          {filteredGadgets?.map((item) => {
                  return <GadgetsDetails item={item} />;
                })}
      </div>
    </div>
    </div>
  )
}

export default Products