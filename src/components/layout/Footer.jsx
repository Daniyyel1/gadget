import React from 'react'
import { FooterWrapper } from '../Pages/style'
import FooterContainer from '../Subpages/FooterContainer'

const Footer = () => {
  return (
    <FooterWrapper>

       <div className=' h-[100%] bg-[#382f28] '>
           <FooterContainer />
       </div>
       
    </FooterWrapper>
  )
}

export default Footer