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
  
 
  const slideSection = [
     {
       id:1,
       img:'https://i.pinimg.com/736x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg',
     },
     {
       id:2,
       img:'https://i.pinimg.com/736x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg',
     },
     {
       id:3,
       img:'https://i.pinimg.com/736x/62/d4/52/62d45263e9db6af2785399aec22b9564.jpg',
     },
     {
       id:4,
       img:'https://i.pinimg.com/736x/cd/cd/ab/cdcdabfb9b5259236eb5b6a7d4f17666.jpg',
     },
     {
       id:5,
       img:'https://i.pinimg.com/736x/2d/bb/f1/2dbbf1bd57481461bba8945c91a3c561.jpg',
     },
  ]
 

  return (
      <Carousel className="max-w-[1200px] m-auto" responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        transitionDuration={500}
      
      >
          {
            slideSection.map((item, index) =>{
              return <div className="h-[300px] w-[400px] flex justify-center items-center  max-md:mt-3.5" key={index}>
          
                 <img className="h-[100%] w-[100%] object-center" src={item.img} alt="slide" />
                
              </div>
            })
          }

      </Carousel>
        
  );
};

export default SlideSection;
