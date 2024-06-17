"use client";

import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiCycling, BiShoppingBag } from "react-icons/bi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={true}
    >
      {/* first hero section */}
      <div className=" w-[100%] h-[80vh] flex items-center justify-center flex-col bg-blue-950  md:clip_path ">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto ">
          <Image
            src="/b1.png"
            alt="hero image"
            height={400}
            width={600}
            className=" hidden md:block  "
          />
          <div className="">
            <h1 className="text-[40px] font-semibold text-yellow-400 ">
              Fast Food Burger
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold ">
              Best <br /> Burger
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px] ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              nulla laboriosam eius ab ipsa! Illum alias corporis voluptatibus
              assumenda sint non ad aspernatur aut ea?
            </p>
            <button
              className="px-8 mt-[2rem] py-3 sm:px-8 sm:py-3 text-[16px] sm:text-[16px] bg-green-500 transition-all duration-200 
             hover:bg-green-800 flex items-center rounded-md space-x-2 text-white "
            >
              <span className="">
                <BiCycling className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]  " />
              </span>
              <span className=" font-bold ">Order Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* the 2nd slider */}
      <div className=" w-[100%] h-[80vh] flex items-center justify-center flex-col bg-orange-950  md:clip_path ">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto ">
          <Image
            src="/b2.png"
            alt="hero image"
            height={400}
            width={600}
            className=" hidden md:block  "
          />
          <div className="">
            <h1 className="text-[40px] font-semibold text-yellow-400 ">
              Fast Food Burger
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold ">
              Best <br /> Burger
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px] ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              nulla laboriosam eius ab ipsa! Illum alias corporis voluptatibus
              assumenda sint non ad aspernatur aut ea?
            </p>
            <button
              className="px-8 mt-[2rem] py-3 sm:px-8 sm:py-3 text-[16px] sm:text-[16px] bg-green-500 transition-all duration-200 
             hover:bg-green-800 flex items-center rounded-md space-x-2 text-white "
            >
              <span className="">
                <BiCycling className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]  " />
              </span>
              <span className=" font-bold ">Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
