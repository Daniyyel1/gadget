import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import only from '../../assets/only.png'
import all from '../../assets/all.png'

const SlideSection = () => {
  const responsive = {
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
  
 

 

  return (
    <div className="max-md:mt-7">
      <Carousel className="" responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        transitionDuration={500}
      
      >
         <div className="max-md:w-[320px] max-md:m-auto">
        <div className="card h-[240px] max-[960px]:h-[240px] border-2 flex justify-center items-center">
            <img className="object-cover max-md:h-[150px] max-md:w-[200px]" src={only} alt="img " />
        </div>
        </div>
      </Carousel>
         
    </div>
  );
};

export default SlideSection;
