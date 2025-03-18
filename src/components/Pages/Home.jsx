import React from 'react'
import Banner from '../Subpages/Banner'
import Carousel from '../Subpages/Carousel'
import { Slide } from '../Data'
import DiscoverWrapper from '../Subpages/DiscoverWrapper'
import SlideSection from '../Subpages/SlideSection'
import Subscribe from '../Subpages/Subscribe'


const Home = () => {
  return (
    <div className='home h-[370vh] max-md:h-[100%]'>
      <Banner />
 {/* {products.map((x, i) => (<div key={i}>{x.description}</div>))} */}
  
     <Carousel data={Slide} />
     <DiscoverWrapper />
     <SlideSection />
     <Subscribe />
    </div>
  )
}

export default Home