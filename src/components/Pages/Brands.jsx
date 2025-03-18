import React, { useState }  from 'react'
import { Gadget } from '../../Gadget'
import { Link } from 'react-router-dom'

const Brands = () => {
   
  const [items, setItems] = useState(Gadget)

     
    const filteredGadget = (cartItem)=>{
      const updateItems = Gadget.filter((curlItem)=>{
        return curlItem.manufacturer === cartItem
      })
       
      setItems(updateItems)

    } 

    const truncateText = (text, maxLength) => {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
      }
      return text;
    };

  return (
    <div className='bg-[#fff] h-[190vh] max-md:h-[100%]'>
     <div className='max-w-[1100px] m-auto max-md:px-2'>
      <h1 className='text-[20px] font-[550]'>Gadgets</h1>
       <div className='flex gap-2 py-6'>
        <button className='button cursor-pointer bg-[#372f28]' onClick={()=>setItems(Gadget)}>all gadget</button>
         <button className='button cursor-pointer bg-[#372f28]' onClick={()=>filteredGadget("Mk")}>Mk gadgets</button>
         <button className='button bg-[#372f28]' onClick={()=>filteredGadget("Cisco")}>cisco gadgets</button>
       </div>
    <div className='grid grid-cols-4 max-md:grid-cols-2 gap-5 max-md:gap-2 mt-[20px]  '>
        {items.map((item)=>{
          return (
             <div className='box h-[260px]  bg-[linear-gradient(180deg,#372f28_50%,#fff_50%)] px-4 max-md:px-2'>
               <div className='flex justify-center items-center object-cover py-2'>
              <img className='h-[160px] max-md:h-[145px] w-[100%]' src={item.images[0]} alt='images' />
              </div>
               <h1 className='text-[12px] w-[240px] max-md:w-[150px] font-[550]'>{truncateText(item.name, 32)}</h1>
               <div className='mt-[10px] max-w-[140px] m-auto'>
                <Link to={`/gadgetPage/${item.id}`}>
                  <button className='text-[#fff] rounded-[18px] max-md:text-[13px] cursor-pointer bg-[#372f28] h-[35px] max-md:h-[32px] w-[150px] max-md:w-[120px]'>Add to cart</button>
                  </Link>
               </div>
             </div>
          )
        })} 
    </div>
    </div>
    </div>
  )
}

export default Brands