import React, { useContext } from 'react'
import { Items } from '../Data'
import Discover from './Discover'
import { SearchContext } from '../../Context'
import Search from './Search'


const DiscoverWrapper = () => {
    const {handleSearchChange, filteredBooks} = useContext(SearchContext)
  return (
    <div className='bg-[#fff] h-[120vh] max-md:h-[100%]'>
         <h1 className='text-center py-[40px] text-[50px] max-md:text-[25px] font-[800] uppercase w-[600px] max-md:w-[300px] m-auto text-[#372f28]'>Discover Curated Collections</h1>
         <div className='grid grid-cols-4 gap-[60px] max-md:gap-[5px] max-md:w-[360px] max-w-[1100px] m-auto max-md:grid-cols-2' >
        {
            Items[0].gadgets?.map((gadget)=>{
              return <Discover item={gadget} key={gadget} />
            })
        }

{/* {filteredBooks?.map((item) => {
          return <Discover item={item} />;
        })} */}

         </div>
       
    </div>
  )
}

export default DiscoverWrapper