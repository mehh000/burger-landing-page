'use client'


import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Burgercard from "./Burgercard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const PopularBurger = () => {
  return (
    <div className="pt-[3rem] pb-[3rem] ">
      <h1 className="heading">
        our Popular <span className="text-red-600">Burger</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto ">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
           {/* burger cards */}
           <Burgercard title='Beefy Bite' image='/b1.png' reviws='23' price='11.88$'  />
           <Burgercard title='Beefy Bite' image='/b2.png' reviws='45' price='9.88$'  />
           <Burgercard title='Beefy Bite' image='/b3.png' reviws='62' price='13.88$'  />
           <Burgercard title='Beefy Bite' image='/b4.png' reviws='43' price='12.88$'  />
           <Burgercard title='Beefy Bite' image='/b5.png' reviws='12' price='7.88$'  />
           <Burgercard title='Beefy Bite' image='/b6.png' reviws='33' price='6.88$'  />
           <Burgercard title='Beefy Bite' image='/b7.png' reviws='44' price='9.88$'  />
           <Burgercard title='Beefy Bite' image='/b8.png' reviws='12' price='11.88$'  />
           <Burgercard title='Beefy Bite' image='/b9.png' reviws='20' price='12.88$'  />

        </Carousel>
      </div>
    </div>
  );
};

export default PopularBurger;
