import React, { useEffect, useRef, useState } from "react";
import { CarouselWrapper } from "../Pages/style";

const Carousel = ({data}) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide >= data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  useEffect(() => {
      setTimeout(()=>{
        nextSlide();
      }, 4000)
  },);

  const moveDot = idx =>{
    setSlide(idx)
}


  return (
    <CarouselWrapper>
      <div className="carousel max-md:h-[50vh] flex justify-center items-center relative w-[100%] overflow-hidden h-[100%]">
        {data.map((item, idx) => {
          return (
            <img
              src={item.img}
              alt="images"
              key={idx}
              className={`slide w-[100%] h-[100%] ${
                slide === idx ? "slide animation" : "slide slide-hidden"
              }`}
            />
      
          );
        })}

        <div className="buttons">
          {/* <SlArrowRight className='arrow arrow-right' onClick={nextSlide} />
        <SlArrowLeft className='arrow arrow-left' onClick={prevSlide}/> */}

          <span className="arrow arrow-left" onClick={prevSlide}>
            &#8592;
          </span>
          <span className="arrow arrow-right" onClick={nextSlide}>
            {" "}
            &#8594;
          </span>
        </div>
        <div className="indicators">
          {Array.from({ length: 6 }).map((item, idx) => {
            return (
              <div
                className={
                  slide === idx ? "indicator" : "indicator indicator-active"
                }
                // onClick={() => {
                //   moveDot(idx);
                // }}
                onClick={moveDot}
              ></div>
            );
          })}
        </div>
       
      </div>
    </CarouselWrapper>
  );
};

export default Carousel;
