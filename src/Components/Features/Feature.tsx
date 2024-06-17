import React from "react";
import Img1 from "@/../public/f1.jpg";
import Img2 from "@/../public/f2.jpg";
import Img3 from "@/../public/f3.jpg";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <h1 className=" heading ">
        Burger made with <br /> Love and
        <span className="text-red-600"> Care</span>
      </h1>
      {/* cards */}
      <div
        className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 
        md:grid-cols-2 lg:grid-cols-3 gap-[3rem] "
      >
        {/* this is our first card */}
        <div
          className=""
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white rounded-lg shadow-md transition-all duration-200  ">
            <Image src={Img1} alt="burger" className=" rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold ">
              Our Burger
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              deserunt debitis a blanditiis. Quibusdam autem soluta aspernatur
              nesciunt aperiam qui enim, pariatur numquam.
            </p>
          </div>
        </div>
        {/* this is our second card */}
        <div
          className=""
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 lg:translate-y-[3rem] hover:bg-white shadow-md rounded-lg transition-all duration-200  ">
            <Image src={Img2} alt="burger" className=" rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold ">
              Your Opinion is Important
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              deserunt debitis a blanditiis. Quibusdam autem soluta aspernatur
              nesciunt aperiam qui enim, pariatur numquam.
            </p>
          </div>
        </div>
        {/* this is our third card */}
        <div
          className=""
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white shadow-md rounded-lg transition-all duration-200  ">
            <Image src={Img3} alt="burger" className=" rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold ">
              Chicken Burgers
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              deserunt debitis a blanditiis. Quibusdam autem soluta aspernatur
              nesciunt aperiam qui enim, pariatur numquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
